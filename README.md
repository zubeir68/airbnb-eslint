# ESLint-Styleguides

![enter image description here](https://res.cloudinary.com/practicaldev/image/fetch/s--AMz6SUme--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/jv8mmasb5mf0ilw5q1lz.png)
![enter image description here](https://cdn-images-1.medium.com/max/1600/1*EJf1MIFRPIOUd_Rns8Yqiw.png)

## Was ist ESLint ?

***"
ESLint ist ein Open-Source-Dienstprogramm zum 'flusen' von JavaScript, das ursprünglich im Juni 2013 von Nicholas C. Zakas entwickelt wurde. Das Linten von Code ist eine statische Analyse, mit der häufig problematische Muster oder Codes ermittelt werden, die bestimmten Stilrichtlinien nicht entsprechen. Es gibt Code-Linters für die meisten Programmiersprachen, und Compiler integrieren manchmal Linting in den Kompilierungsprozess.."***   - eslint.org

**Ziel: Produktivität und Lesbarkeit**

## Was sind ESLint Styleguides?

### Eslint Styleguides sorgen dafür das dein Code gewisse Stilrichtlinien von einer zuvor gesetzen Konfiguration einhält. Es exestieren 2 bekannte Styleguides:

#### 1. AirBnb
#### 2. Google
![enter image description here](https://media.giphy.com/media/5OAC2cIC2XcWY/giphy.gif)

### 3. Glimmer Components

#### Ember-Standard

```html
{{!-- templates//components/post.hbs --}}

{{#if (eq  type  'image')}}
<img  src={{post.imageUrl}}  title={{post.imageTitle}}>
{{/if}}

{{post.text}}
```
```javascript
// components/post.js
export  default  Component.extend({

  tagName: 'section',
  classNames: ['post'],
  classNameBindings: ['type'],
  ariaRole: 'region',

  post: null,
  
  type: readOnly('post.type'),
  
  didInsertElement() {
    this._super(...arguments);
    if (this.type  ===  'image') {
      setupImageOverlay(this.element.querySelector('img'));
    } 
  }
});
```

#### Ember-Octane

```html
<section
  ...attributes
  role="region"
  type={{@post.type}
  class="post {{@post.type}}"
>
  {{#if (eq @post.type  'image')}}
    <img  {{did-insert  this.didInsertImage}}  src={{@post.imageUrl}}  title={{@post.imageTitle}}/>
  {{/if}}
  {{@post.text}}
</section>
```
```javascript
// components/post.js
export default class PostComponent extends GlimmerComponent{
  @action
  didInsertImage(element) {
    setupImageOverlay(element);
  }
}
```

### 4. Element Modifiers

#### Ember-Standard
```html
{{#if this.isOpen}}
  <div class="popover">
    {{yield}}
  </div>
{{/if}}
```
```javascript
export default Component.extend({
  didRender() {
    if (this.isOpen && !this._popper) {
      let popoverElement = this.element.querySelector('.popover');
       
      this._popper = new Popper(documents, popoverElement);
    } else if(this._popper) {
      this._popper.destroy();
    }
  },
   
  willDestroyElement() {
    if(this._popper) {
      this._popper.destroy();
    }
  }
})
```
#### Ember-Octane

```html
{{#if this.isOpen}}
  <div 
    {{did-insert (action this.setupPopper)}}
    {{will-destroy (action this.teardownPopper)}}
     
    class="popover"
  >
    {{yield}}
  </div>
{{/if}}
```

```javascript
export default Component.extend({
  setupPopper(element) {
    this._popper = new Popper(document, element);
  },
   
  teardownPopper() {
    this._popper.destroy();
  }
})
```
