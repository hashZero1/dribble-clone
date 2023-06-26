import Link from "next/link";
import AuthProviders from "./AuthProviders";
import Image from "next/image";
import { NavLinks } from "@/constants";

const Navbar = () => {
  const session = {};
  return (
    <nav>
      <div>
        <Link href="/">
          <Image src="/logo.svg" width={115} height={43} alt="Flexibble" />
        </Link>
        <ul>
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              <li>{link.text}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div>
        {session ? (
          <>
            UserPhoto
            <Link href="/create-project">Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
