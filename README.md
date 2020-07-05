# Aquarium

Generates a random aquarium using JavaScript and HTML.

Used a multilayered canvas approach to draw and animate multiple elements. 

## Lessons Learnt

- Local Servers with Python and JavaScript Developer Console. 

```
python3 -m http.server
```

- Accessing elements from Layout such as Canvas and Context.
```
<canvas id="layer1" width=1100px height=600px style="position: absolute; left: 0; top: 0; z-index: 0;"></canvas>
const canvas = document.getElementById('layer1');
const context = canvas.getContext('2d');
```

- Create different scripts and how to make exports and imports.
```
export {seabed_species}
import {seabed_species} from "./elements/seabed.js"
```

- Animation frames.

```
window.requestAnimationFrame(canvasDraw);
```

## Resources

- https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server

- https://jsprogramming.net/javascript-programming-basics-tutorial

- https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
