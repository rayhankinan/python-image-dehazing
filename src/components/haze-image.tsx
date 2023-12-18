import { Button, Image } from "@nextui-org/react";

export default function HazeImage() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <Image
        id="haze"
        src="/images/300x300.png"
        fallbackSrc="/images/300x300.png"
        width={300}
        height={300}
        alt="Haze Preview"
      />
      <Button id="download-haze">Download Haze</Button>
    </div>
  );
}
