import { NextResponse } from "next/server";
import { subscribeSchema } from "@/lib/schemas";
import { withValidation } from "@/lib/validation";
import { addSubscriber } from "@/lib/notion";

export const POST = withValidation(subscribeSchema, async (data) => {
  try {
    await addSubscriber(data.email, data.source, data.firstName);

    return NextResponse.json({
      success: true,
      message: "You're on the list.",
    });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
});
