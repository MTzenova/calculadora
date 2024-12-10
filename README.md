Nombre del autor: Mónica Tzenova Ivanova

INSTRUCCIONES PARA EJECUTAR LA APLICACIÓN

Acciones a realizar  en el móvil antes de ejecutar:
- Activar modo desarrollador: Ajustes/Sobre el teléfono/Versión del teléfono (hacer click varias veces hasta que se active el modo desarrollador).
- En el modo desarrollador:
  - Activar depuración USB si conectas el móvil por cable.
  - Activar depuración inalámbrica (tener el wifi encendido y tener el ordenador conectado a la misma red que el móvil).
  - Si en algún momento da error, activar Instalación vía USB
 
Conectar el móvil al ordenador:
- Conectar de forma inalámbrica: En la consola de comandos escribir "adb pair". Introducir dirección IP & Puerto y el código de vinculación.
- Para comprobar los dispositivos conectados escribir "adb devices".

En Visual Studio Code:
- Escribir en consola: npm install
- Después de eso, esribir en consola: npm run start
- Por último esperar a que cargue y escanear el código QR con el móvil o pulsar la "a" (se inicia automáticamente en el móvil).

Imagen de la aplicación en uso:
