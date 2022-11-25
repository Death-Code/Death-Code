!!!!!!!PULL REQUEST!!!!!!!

-Crear rama y moverte a ella:
git checkout -b nombre-de-rama

-Antes de empezar a hacer cambios:
git push --set-upstream origin nombre-de-rama

-Cuando el trabajo este hecho avisar al resto de los compañeros
git add .
git commit -m "descripción del commit"
git push


ACTUALIZAR RAMA ANTES DE PUSHEAR TU TRABAJO

-En tu rama:
git add .
git commit -m "descripción del commit"
git push

-Cambiar a rama dev
git switch dev
git add . (en la rama dev)
git switch tu-rama
git merge dev
-Aceptar incoming changes