
## Usage

Button Component

```html
<agora-button></agora-button>
<agora-button class="scoped-button"></agora-button>
<p>{{msg}}</p>
```

```javascript
import AgoraButton from 'component/button'

export default {
  components: {
    AgoraButton
  },
  data () {
    return {
      msg: 'Helllo World'
    }
  }
}
```

```css
button {
  color: red;
}
```

```css@scoped
.scoped-button {
  background: blue;
}
```