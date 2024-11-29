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
  }).composite([{
    input: Buffer.from(
      `<svg width="${width}" height="${height}">
        <rect x="0" y="0" width="${width}" height="${height}" fill="#e2e8f0"/>
        <text x="50%" y="50%" font-family="Arial" font-size="16" 
              fill="#64748b" text-anchor="middle" dominant-baseline="middle">
          ${width} x ${height}
        </text>
      </svg>`
    ),
    top: 0,
    left: 0,
  }])
  .png()
  .toBuffer();
  
  
  return new Response(image, {
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