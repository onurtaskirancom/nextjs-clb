import ScrollButton from "@/components/scroll-button";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="dark:text-tahiti-bio text-lg">
        <h2 className="b-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-tahiti-title">
          About Onur Taşkıran
        </h2>
        <br />
        <Image
          className="max-md:float-right max-sm:float-none max-xl:float-right max-2xl:float-right float-right pl-8 max-xl:pl-8 max-2xl:pl-8 mb-8 max-w-full mx-auto sm:pl-0 max-md:ml-0 max-md:pl-0 ml-8"
          src="/images/onur-taskiran-profile.jpg"
          alt="onurtaskiran"
          width={430}
          height={511}
        />
        <p className="dark:text-zinc-200">
          Hi my friend, I'm Onur Taşkıran. I live in Istanbul. I have been
          dealing with software and graphic design for many years, love to
          listen to Metallica while writing the code. I am learning new
          technologies now and I will continue to learn. I care about reason and
          science. People should also care so i think it is... Also I am a
          professional athlete. I have three licenses in kickboxing, boxing and
          Muay Thai. Sports and software are an indispensable part of my life
          definition...
        </p>
        <p className="dark:text-zinc-200">
          Follow me maybe one day i can buy you coffee. Come on take care.
          Despite everything, this boy loves you all.
        </p>
        <br />
        <p className="dark:text-zinc-200">
          <strong className="dark:text-tahiti-dark">My favorite songs: </strong>
          Metallica - One, Metallica - My Friend Of Misery, Metallica -
          Blackened, Metallica - Turn The Page, Limp Bizkit - Take A Look
          Around, Limp Bizkit - Break Stuff, Alabama 3 - Sad Eyed Lady Of The
          Lowlife, The Handsome Family - Far From Any Road, Stick Figure -
          Paradise, - Stick Figure - Once in a Lifetime
        </p>
        <p className="dark:text-zinc-200">
          <br />
          <strong className="dark:text-tahiti-dark">
            My favorite movies:{" "}
          </strong>
          The Godfather, Papillon (1973), Pulp Fiction, The Hateful Eight,
          Sherlock Holmes (2009), The Lord of the Rings: The Two Towers, The
          Game (1997), No Country For Old Men, Lost Highway, Warrior, Undisputed
          3, The Matrix, The Usual Suspects, 1408 (2007)
        </p>
        <p className="dark:text-zinc-200">
          <br />
          <strong className="dark:text-tahiti-dark">
            My favorite Tv Series:
          </strong>
          Vikings, Van Helsing, Mr. Robot, Sherlock, Spartacus, Peaky Blinders,
          Banshee, Narcos, Prison Break, House of Cards, La Case De Papel, The
          Mentalist
        </p>
        <br />
        <blockquote className="relative border-s-4 ps-4 sm:ps-6 dark:border-tahiti-title">
          <p>
            <strong className="dark:text-tahiti-dark">
              My favorite quotations:
            </strong>
          </p>
          <p> "It is the power of the mind to be unconquerable..." - Seneca</p>
          <p>"I will either find a way, or make one." - Hannibal Barca </p>
          <p>
            "Give me six hours to chop down a tree and I will spend the first
            four sharpening the axe." - Abraham Lincoln
          </p>
          <p>
            "All men can see these tactics whereby I conquer, but what none can
            see is the strategy out of which victory is evolved." - Sun Tzu
          </p>
        </blockquote>
        <br />
        <h6 className="dark:text-tahiti-title">SOFTWARE SKILLS</h6>
        <p>
          <Image
            className="float-left"
            src="/images/react.png"
            alt="onurtaskiran"
            width={32}
            height={32}
          />
          <Image
            className="float-left"
            src="/images/nodejs.png"
            alt="onurtaskiran"
            width={32}
            height={32}
          />
          <Image
            className="float-left"
            src="/images/javascript.png"
            alt="onurtaskiran"
            width={32}
            height={32}
          />
          <Image
            className="float-left"
            src="/images/angular.png"
            alt="onurtaskiran"
            width={32}
            height={32}
          />
          <Image
            className="float-left"
            src="/images/aspnet.png"
            alt="onurtaskiran"
            width={32}
            height={32}
          />
          <Image
            className="float-left"
            src="/images/mongodb.png"
            alt="onurtaskiran"
            width={32}
            height={32}
          />
          <Image
            className="float-left"
            src="/images/msserver.png"
            alt="onurtaskiran"
            width={32}
            height={32}
          />
          <Image
            className="float-left"
            src="/images/html5.png"
            alt="onurtaskiran"
            width={32}
            height={32}
          />
          <Image
            className="float-left"
            src="/images/css.png"
            alt="onurtaskiran"
            width={32}
            height={32}
          />
        </p>
        <br /> <br />
        <h6 className="float-left dark:text-tahiti-title">GRAPHIC SKILLS </h6>
        <br />
        <p>
          <Image
            className="float-left"
            src="/images/photoshop.png"
            alt="onurtaskiran"
            width={32}
            height={32}
          />
          <Image
            className="float-left"
            src="/images/illustrator.png"
            alt="onurtaskiran"
            width={32}
            height={32}
          />
          <Image
            className="float-left"
            src="/images/indesign.png"
            alt="onurtaskiran"
            width={32}
            height={32}
          />
          <Image
            className="float-left"
            src="/images/premiere.png"
            alt="onurtaskiran"
            width={32}
            height={32}
          />
        </p>
      </div>
      <ScrollButton />
    </>
  );
};
export default page;
