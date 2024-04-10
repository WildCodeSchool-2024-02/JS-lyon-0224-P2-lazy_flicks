function Description() {
  return (
    <main className="container">
      <div>
        <img
          className="picture"
          src="https://static.tvtropes.org/pmwiki/pub/images/gladiator_5.png"
          alt=""
        />
      </div>
      <div className="text">
        <h1>Gladiator</h1>
        <p>
          <span>Release :</span> June 20 2000 | 2h35
        </p>
        <p>
          <span>By :</span> Ridley Scott
        </p>
        <p>
          <span>Rate ⭐ :</span> 4.5/10
        </p>
        <p>
          The Roman general Maximus is the most faithful support of the Emperor
          Marcus Aurelius, whom he led from victory to victory with exemplary
          bravery and dedication. Jealous of Maximus' prestige, and even more so
          of the emperor's love for him, Marcus Aurelius' son, Commodus,
          brutally assumed power, then ordered the general's arrest and
          execution. Maximus escapes his assassins but cannot prevent the
          massacre of his family. Captured by a slave trader, he becomes a
          gladiator and plots his revenge.
        </p>
        <button className="button-watch" type="button">
          Watch
        </button>
      </div>
    </main>
  );
}

export default Description;
