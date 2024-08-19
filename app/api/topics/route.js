import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topics";
import { NextResponse } from "next/server";

// POST: Create a new topic
export async function POST(request) {
  try {
    const { title, description } = await request.json();

    // Validate the input
    if (!title || !description) {
      return NextResponse.json(
        { message: "Title and description are required" },
        { status: 400 }
      );
    }

    await connectMongoDB();
    const newTopic = await Topic.create({ title, description });

    return NextResponse.json(
      { message: "Topic Created", topic: newTopic },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating topic:", error);
    return NextResponse.json(
      { message: "Failed to create topic" },
      { status: 500 }
    );
  }
}

// GET: Retrieve all topics
export async function GET() {
  try {
    await connectMongoDB();
    const topics = await Topic.find();

    if (!topics.length) {
      return NextResponse.json({ message: "No topics found" }, { status: 404 });
    }

    return NextResponse.json({ topics }, { status: 200 });
  } catch (error) {
    console.error("Error fetching topics:", error);
    return NextResponse.json(
      { message: "Failed to fetch topics" },
      { status: 500 }
    );
  }
}

// DELETE: Delete a topic by ID
export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    await connectMongoDB();
    const deletedTopic = await Topic.findByIdAndDelete(id);

    if (!deletedTopic) {
      return NextResponse.json({ message: "Topic not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Topic deleted", topic: deletedTopic },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting topic:", error);
    return NextResponse.json(
      { message: "Failed to delete topic" },
      { status: 500 }
    );
  }
}
