# 0.4: New note diagram

```mermaid
 sequenceDiagram

  Browser->>+Server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
  Server->>+Browser: text/html
  Browser->>+Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
  Server->>+Browser: text/html
  Browser->>+Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
  Server->>+Browser: text/css
  Browser->>+Server: HTTP GET hhttps://studies.cs.helsinki.fi/exampleapp/main.js
  Server->>+Browser: application/javascript
   Browser->>+Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
  Server->>+Browser: application/json
  Note left of Browser : Browser renders notes to display
```

# 0.5: Single page app diagram

```mermaid
 sequenceDiagram

  Browser->>+Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
  Server->>+Browser: text/html
  Browser->>+Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
  Server->>+Browser: text/css
  Browser->>+Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
  Server->>+Browser: application/javascript
   Browser->>+Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
  Server->>+Browser: application/json

```

# 0.6: New note in Single page app diagram

```mermaid
sequenceDiagram

Browser->>+Server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
Server->>+Browser: application/json
  Note left of Browser : The SPA dynamically updates the user interface


```
