import React from 'react'

const YoutubeEmbed = ({videoUrl}) => {
  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src={videoUrl.replace("watch?v=", "embed/")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
  )
}

export default YoutubeEmbed