import { NextResponse } from "next/server";
import { Storage } from "@google-cloud/storage";

const storage = new Storage();
// The ID of your GCS bucket
const bucketName = "68construction-photos";

// The directory prefix to search for
const prefix = "portfolio/";

// The delimiter to use
// const delimiter = "/";

export async function GET(request: Request) {
  // const options = {
  //   prefix: prefix,
  // };

  // const [files] = await storage.bucket(bucketName).getFiles(options);

  // console.log("Files:");
  // files.forEach((file) => {
  //   console.log(file.name);
  // });

  // return NextResponse.json({ files });
  return new Response("hello");
}
