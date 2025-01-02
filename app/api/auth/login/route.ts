import { NextResponse } from "next/server";
import { loginUser } from "@/lib/auth";

export async function POST(request: Request) {
  const { username, password, role } = await request.json();

  if (!username || !password || !role) {
    return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
  }

  const result = await loginUser({ username, password, role });

  if (result.success) {
    return NextResponse.json({ message: "User logged in successfully", success: true, user: result.user }, { status: 201 });
  }
}
