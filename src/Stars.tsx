
import "./stars.css";

export default function Stars() {
  const stars = Array.from({ length: 90 });
  const shootingStars = Array.from({ length: 4 });

  return (
    <>
      {/* Static Galaxy Gradient */}
      <div className="galaxy-gradient"></div>

      {/* Floating Nebula Clouds */}
      <div className="nebula nebula-1"></div>
      <div className="nebula nebula-2"></div>
      <div className="nebula nebula-3"></div>

      {/* Infinite Blinking Stars */}
      <div className="stars-wrapper">
        {stars.map((_, i) => {
          const randomX = Math.random();
          const randomY = Math.random();
          return (
            <div
              key={i}
              className="star"
              style={{
                ["--x" as any]: randomX,
                ["--y" as any]: randomY,
                animationDelay: `${Math.random() * 4}s`,
                transform: `scale(${Math.random() * 1.4 + 0.7})`,
              }}
            ></div>
          );
        })}
      </div>

      {/* Shooting Stars */}
      <div className="shooting-stars-wrapper">
        {shootingStars.map((_, i) => (
          <div
            key={i}
            className="shooting-star"
            style={{
              top: `${Math.random() * 40}vh`,
              left: `${Math.random() * 30}vw`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>
    </>
  );
}
