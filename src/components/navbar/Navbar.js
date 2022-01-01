// src/components/Navbar.js

import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import './Navbar.css';

export default function Navbar() {
  return (
    <section className={"navbarContainer"}>
        <ul class="navigation">
          <li><a href="#about">/About/</a></li>
          <li><a href="#skills">/Skills/</a></li>
          <li><a href="#projects">/Projects/</a></li>
          <li><a href="#contact">/Contact/</a></li>
        </ul>
    </section>
  );
}