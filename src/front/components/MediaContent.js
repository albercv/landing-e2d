const MediaContent = ({ media, title, id, isPreview = false }) => {
  // Si no hay media pero hay image en el post padre, crear un objeto media compatible
  if (!media && window.post?.image) {
    media = {
      type: "image",
      url: window.post.image
    };
  }

  if (!media) return null;

  // Si media es directamente una string, asumimos que es una imagen
  if (typeof media === 'string') {
    media = {
      type: "image",
      url: media
    };
  }

  if (media.type === "youtube") {
    return (
      <div 
        style={{ 
          position: 'relative', 
          paddingBottom: '56.25%', 
          height: 0, 
          overflow: 'hidden' 
        }} 
        className={`rounded-lg ${isPreview ? 'my-4' : 'my-6'}`}
      >
        <iframe
          src={`https://www.youtube.com/embed/${media.url}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '0.5rem'
          }}
        />
      </div>
    );
  }

  // Por defecto asumimos que es una imagen
  return (
    <img
      src={media.url || media}
      alt={title}
      className={`w-full h-auto ${isPreview ? 'max-h-48' : 'max-h-96'} object-cover rounded-lg ${isPreview ? 'my-4' : 'my-6'}`}
      onError={(e) => {
        console.error(`Failed to load image for post: ${id}`);
        e.target.src = '/assets/images/placeholder.jpg';
      }}
    />
  );
};

export default MediaContent;