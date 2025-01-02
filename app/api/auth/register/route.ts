import { createUser } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { username, password, role } = await request.json();

  if (!username || !password || !role) {
    return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
  }

  const result = await createUser({ username, password, role });

  if (result.success) {
    return NextResponse.json({ message: "User created successfully", success: true }, { status: 201 });
  }
}
