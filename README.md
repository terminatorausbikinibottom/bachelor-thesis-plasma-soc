# Bachelor Thesis: Porting and Extension of a Plasma System for Easy Use of Additional Hardware Components

> **Disclaimer:** This README was generated with the help of a large language model (LLM). While care has been taken, correctness is not guaranteed.

> **Note:** The thesis document is written in German.

## About

This repository contains the LaTeX source of the bachelor thesis *"Portierung und Erweiterung eines Plasma-Systems zur einfachen Nutzung weiterer Hardware-Komponenten"* (Porting and Extension of a Plasma System for Easy Use of Additional Hardware Components), submitted at the [Technische Hochschule Mittelhessen (THM)](https://www.thm.de/), Department of Information Technology, Electrical Engineering and Mechatronics.

**Author:** Sergej Zuyev  
**Date:** September 17, 2018  
**Supervisors:** Prof. Dr. Hartmut Weber, Prof. Dr.-Ing. Martin Gräfe  
**Degree:** Bachelor of Engineering (B.Eng.)

## Summary

This thesis describes the porting of a Plasma (MIPS-I) soft-core processor system from a Xilinx FPGA to an Altera/Intel FPGA and its extension with a standardized Wishbone bus system. An ARM CPU on the Altera/Intel FPGA is configured together with a Linux operating system. Firmware and a sample application are developed for the Plasma system, and the correctness of the port is demonstrated through Linux applications and a custom driver that verify the interfaces between the ARM and Plasma (MIPS-I) systems.

## Repository Structure

```
.
├── Bachelorarbeit.tex      # Main LaTeX document
├── bibliography.bib        # Bibliography (BibLaTeX/Biber)
├── glossary.tex            # Glossary and acronym definitions
├── chapters/               # Individual chapter files
│   ├── titlepage.tex
│   ├── abstract.tex
│   ├── introduction.tex
│   ├── materials.tex
│   ├── theory.tex
│   ├── architecture.tex
│   ├── implementation.tex
│   ├── synopsis.tex
│   ├── appendix.tex
│   └── ...
├── images/                 # Figures and diagrams
├── attachments/            # Supplementary material (bitstreams, HDL sources)
│   ├── Plasma-SoC/        # Plasma SoC VHDL sources
│   └── Bitstreams/         # Pre-built FPGA bitstreams
└── dvd/                    # Accompanying digital material
    ├── Bitstreams/
    ├── dts/                # Device tree sources
    ├── Plasma-SoC/
    └── Referenzen/
```

## Building

### Prerequisites

A full TeX Live installation is recommended. The following tools and packages are required:

- **pdfLaTeX** with `-shell-escape` support
- **Biber** (bibliography processor)
- **makeglossaries** (glossary generation)
- **texindy** / **xindy** (index processing)
- **Python** with **Pygments** (required by the `minted` package for syntax highlighting)
- **arara** (optional — TeX build automation tool)

On Debian/Ubuntu:

```bash
sudo apt install texlive-full python3-pygments
```

On Arch Linux:

```bash
sudo pacman -S texlive-most python-pygments
```

### Compile with arara (recommended)

The document includes [arara](https://islandoftex.gitlab.io/arara/) directives. From the repository root:

```bash
arara Bachelorarbeit.tex
```

### Compile manually

```bash
pdflatex -shell-escape Bachelorarbeit.tex
biber Bachelorarbeit
makeglossaries Bachelorarbeit
pdflatex -shell-escape Bachelorarbeit.tex
pdflatex -shell-escape Bachelorarbeit.tex
```

Multiple `pdflatex` passes are needed to resolve cross-references, the table of contents, and the bibliography.

### Compile with latexmk

```bash
latexmk -pdf -shell-escape Bachelorarbeit.tex
```

> **Note:** Ensure `latexmk` is configured to use Biber and makeglossaries. You may need a `.latexmkrc` file.

## License

This thesis is provided for reference and educational purposes. All rights remain with the author. The Plasma SoC sources in `attachments/Plasma-SoC/` and `dvd/Plasma-SoC/` may be subject to their own respective licenses.

