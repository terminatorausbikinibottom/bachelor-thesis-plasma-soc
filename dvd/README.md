#Ordner- und Datenstruktur:

0. Bachelorarbeit in elektronischer Form
1. Bitstreams
    1. plasma_soc.rbf
2. dts
    1. socfpga_cyclone5_de1_soc.dtb
    2. socfpga_cyclone5_de1_soc.dts
    3. socfpga_cyclone5.dtsi
    4. socfpga.dtsi
    5. skeleton.dtsi
3. Plasma-SoC - Quelltexte
    1. proj - Vivado und Quartus Projektdateien
    2. rtl - Hardwarebeschreibung
    3. sw - Software
    4. tb - Testbenches
    5. dependencies 
        1. KebabOS - Firmware-Quellcode
        2. PlasmaConvert - ELF-Converter
4. Referenzen
5. Webquellen
6. README.md
7. linux-socfpga-socfpga-4.9.78-ltsi.zip
    * Linux-Kernel-Quelltexte 4.9.78-ltsi
    * Als ZIP mitgeliefert, da auf dem MacOS das Dateisystem nicht Case-Sensitiv ist. 
8. ubuntu-4.9.78.img.gz - modifiziertes Linux-Systemabbild
    * Komprimiertes Image, zum direkten Beschreiben eines Gerätes bitte gunzip -c ubuntu-4.9.78.img.gz | pv | sudo dd of=/dev/sdf bs=1M ausführen