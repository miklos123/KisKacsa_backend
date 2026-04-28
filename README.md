# KisKacsa Étterem

## A projektről

> A KisKacsa Étterem egy modern, reszponzív webalkalmazás, amely egy étterem online felületét valósítja meg. A látogatók könnyedén böngészhetik az étel-, ital- és desszertkínálatot kategóriák szerint rendezve.
>
> Az alkalmazás admin felülettel is rendelkezik, amely lehetővé teszi az étlap kezelését, így az adminisztrátorok új termékeket adhatnak hozzá, módosíthatják vagy törölhetik a meglévőket. A rendszer adatbázis alapú, így dinamikusan kezeli a tartalmakat.
>
> A projekt célja egy valós éttermi webalkalmazás alapjainak bemutatása modern webes technológiák segítségével.

---

## Készítette

Horváth Miklós
Győri Patrik Sándor

* Frontend repo: https://github.com/miklos123/KisKacsa-frontend.git
* Backend repo: https://github.com/gyorishun/KisKacsa_backend.git

## Telepítés és futtatás

# Backend
git clone https://github.com/gyorishun/KisKacsa_backend.git
cd KisKacsa_backend
npm install
npm start

# Frontend
git clone https://github.com/miklos123/KisKacsa-frontend.git
cd KisKacsa-frontend
npm install
npm run dev

---
## Teszt admin hozzáférés

A rendszerhez teszteléshez használható admin fiók:

- E-mail: kiskacsa@gmail.com --> gyorisgoty@gmail.com
- Jelszó: kiskacsa2026 --> 12345

⚠️ Figyelem: ez csak fejlesztési környezetben használható!
---

## Környezeti változók (.env)

A backend futtatásához szükséges egy `.env` fájl:

HOST=127.0.0.1
PORT= 4000

DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=
DB_NAME=kiskacsa
DB_TIMEZONE=Z

JWT_SECRET=ez_egy_very_biztonságos_jelszo
JWT_EXPIRES_IN=7d

COOKIE_NAME=token

---

## Használt package-ek

* bcryptjs
* cookie-parser
* cors
* dotenv
* express
* jsonwebtoken
* multer
* mysql2
* nodemon

<img width="254" height="367" alt="image" src="https://github.com/user-attachments/assets/53138a21-5920-46c7-9de4-4f1405ada46e" />


---

## Fejlesztési környezet

* **Frontend:**

  * HTML
  * CSS
  * React
  * Bootstrap

* **Backend:**

  * Node.js (API)
  * PHP (kiegészítő szerveroldali logika)

* **Adatbázis:**

  * MySQL

---

## 📡 API végpontok

Az alábbiakban a backend főbb végpontjai találhatók.  
Az API REST elven működik, és JSON formátumban kommunikál.

---

## 🔐 1. Auth végpontok

| Művelet        | HTTP | Végpont     | Leírás |
|----------------|------|------------|--------|
| Regisztráció   | POST | `/register` | Új admin felhasználó létrehozása |
| Bejelentkezés  | POST | `/login` | Admin bejelentkezése |
| Ellenőrzés     | GET  | `/whoami` | Bejelentkezett felhasználó lekérdezése (auth szükséges) |

```js
router.post('/register', register);
router.post('/login', login);
router.get('/whoami', auth, whoAmI);
router.post('/logout', logout);


---
## Adatbázis

<img src="images/adatbazis.png" width="600">

* KisKacsa Étterem tervező


### Táblák és mezők

* **users**

  * user_id
  * email
  * psw

* **termekek**

  * termek_id
  * kategoria_id
  * nev
  * ar
  * kep

* **kategoria**

  * kategoria_id
  * kategoria_nev

* **allergenek**

  * allergen_id
  * osszetevo_neve

* **termekallergenek**

  * termek_id
  * allergen_id

* **hirlevel**

  * hirlevel_id
  * email
  * veznev
  * kernev
  * szulnap

---

### Kapcsolatok

* Egy **termék** egy **kategóriához** tartozik
* Egy **termékhez több allergén** is tartozhat (kapcsolótáblán keresztül)
* A **users** tábla az admin bejelentkezéshez szükséges
* A **hirlevel** tábla a feliratkozók adatait tárolja

---

## Backend

A backend feladata az adatok kezelése és a frontend kiszolgálása. Kapcsolatot biztosít a MySQL adatbázissal, valamint kezeli az admin bejelentkezést és az étlap módosítását.
A backend REST API elven működik, és HTTP kéréseken keresztül kommunikál a frontenddel.

### Főbb funkciók:

* Admin bejelentkezés
* Termékek kezelése (CRUD)
* Kategóriák kezelése
* Adatbázis műveletek

---

## Frontend

A frontend React alapú, és a React Router segítségével több oldalra van bontva.

### Oldalak (routing)

```javascript
<Route path='/' element={<Home />}/>
<Route path='admin' element={<Admin />}/>
<Route path='adminpanel' element={<Adminpanel />}/>
<Route path='etelek' element={<Ételek/>}/>
<Route path='italok' element={<Italok/>}/>
<Route path='desszertek' element={<Desszertek/>}/>
```

---

### Oldalak leírása

* **Home** → főoldal
* **Ételek** → étlap (ételek)
* **Italok** → itallap
* **Desszertek** → desszertek
* **Admin** → bejelentkezési felület
* **Adminpanel** → admin kezelőfelület

---

### Főbb funkciók:

* Étel-, ital- és desszertlista megjelenítése
* Kategóriák szerinti szűrés
* Admin felület az adatok kezelésére
* Reszponzív design Bootstrap segítségével

---

## Biztonság

* Admin felület csak bejelentkezés után érhető el
* Jelszavak titkosítva (hash-elve) kerülnek tárolásra
* Adatkezelés szerver oldalon történik

---

## Tesztelés

A projekt manuálisan lett tesztelve, különös figyelmet fordítva az alábbiakra:

* Oldalak helyes betöltése
* Navigáció működése
* Admin funkciók (CRUD műveletek)
* Adatbázis műveletek helyessége
* Hibakezelés alapvető esetei

---

## Továbbfejlesztési lehetőségek

* Online rendelési rendszer
* Asztalfoglalás funkció
* Felhasználói regisztráció
* Képfeltöltés fejlesztése
* Allergén szűrés a felületen

---


## Használt eszközök

* Visual Studio Code
* GitHub
* MySQL / PhpMyAdmin / DrawSQL
* W3Schools
* Postman
* Google Chrome
* Google Drive
* ChatGPT
* Figma

