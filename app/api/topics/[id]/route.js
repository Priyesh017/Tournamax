import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topics";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { title, description } = await request.json();

  try {
    await connectMongoDB();

    if (!id || !title || !description) {
      return NextResponse.json({ message: "Invalid input" }, { status: 400 });
    }

    const updatedTopic = await Topic.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );

    if (!updatedTopic) {
      return NextResponse.json({ message: "Topic not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Topic updated", topic: updatedTopic },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating topic:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request, { params }) {
  const { id } = params;

  try {
    await connectMongoDB();
    const topic = await Topic.findById(id);

    if (!topic) {
      return NextResponse.json({ message: "Topic not found" }, { status: 404 });
    }

    return NextResponse.json({ topic }, { status: 200 });
  } catch (error) {
    console.error("Error fetching topic:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
