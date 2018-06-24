# Angular HTML Helpers

[![Build Status](https://travis-ci.com/pascaliske/html-helpers.svg?branch=master)](https://travis-ci.com/pascaliske/html-helpers) [![Greenkeeper badge](https://badges.greenkeeper.io/pascaliske/html-helpers.svg)](https://greenkeeper.io/)

## Installation

To install the module use the following commands:

```bash
$ yarn add @pascaliske/html-helpers
```

## Usage

### CSS modifier classes

In your `TS` code:

```typescript
@Component({
    selector: 'cmp-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
    public classes(namespace: string): string {
        return modifiers(namespace, {
            foo: true,
            bar: false,
            baz: true,
        })
    }
}
```

In your `HTML` code:

```html
<!-- className: cmp-demo--foo cmp-demo--baz -->
<div [className]="classes('cmp-section')"></div>
```

## License

MIT © [Pascal Iske](https://pascal-iske.de)
