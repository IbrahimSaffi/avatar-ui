# Avatar Picker Component

![](demo.gif)

This is going to be a react component which is being passed just one property: the list of available `avatars`. This list contains the src of the image file, the avatar label and a unique avatar id. The number of avatars can vary (let's say up to 12). For this example please use the following array:
```js
[
  { "src": "images/avatar1.png", "label": "Avatar 1", "id": 1 },
  { "src": "images/avatar2.png", "label": "Avatar 2", "id": 2 },
  { "src": "images/avatar3.png", "label": "Avatar 3", "id": 3 },
  { "src": "images/avatar4.png", "label": "Avatar 4", "id": 4 },
  { "src": "images/avatar5.png", "label": "Avatar 5", "id": 5 },
  { "src": "images/avatar6.png", "label": "Avatar 6", "id": 6 }
]
```
Avatar images are located under `/public` folder.

### Design and behaviour:
- The initially shown avatar is the first in the given list of avatars
- The initial avatar which opens the popover has a border of 1px on hover and active state
- The avatar icons are shown in groups of 4, aligned left (with 6 icons it will exactly look like it does in the gif)
- The popover opens with a scaling animation that overbounces a bit (see gif; you're free to choose values for the animation that look good in your opinion, or close to what you see above)
- The currently chosen avatar has a blue border of 3px
- A click outside the popover area will result in the popover closing
- Simulate a server request/response by showing the spinner for exactly one second before choosing the avatar
- The popover is closed when an avatar is chosen

### Note
- You're NOT allowed to use any third party CSS libraries
