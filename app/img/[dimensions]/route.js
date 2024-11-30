// app/api/image/[dimensions]/route.ts
import { NextResponse } from 'next/server';
import sharp from 'sharp';

export async function GET(request, { params }){
  try {
  
  const dimensions = (await params).dimensions

  //String to Number
  const [width, height] = dimensions.split("x").map(Number)
  
  if(!width || !height || isNaN(width) || isNaN(height)){
    return new Response("Invalid format", {
      status: 400
    })
  }
  if(width < 1 || height < 1 || width > 2000 || height > 2000 ){
    return new Response("Dimensions must be between 1 and 2000 pixels", {
      status: 400
    })
  }

  const image = await sharp({
    create: {
      width: width,
      height: height,
      channels: 4,
      background: { r: 200, g: 200, b: 200, alpha: 1 }
    }
  })
  .png()
  .toBuffer();
  
  
  return new NextResponse(image, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable'
    },
  })
} catch (error) {
  console.error('Error generating image:', error);
  return new NextResponse('Error generating image', { status: 500 });
}
}
