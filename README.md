# Angular HTML Helpers

[![Build Status](https://img.shields.io/github/workflow/status/pascaliske/html-helpers/Test%20package/master?label=test&style=flat-square)](https://github.com/pascaliske/html-helpers/actions) [![codecov](https://codecov.io/gh/pascaliske/html-helpers/branch/develop/graph/badge.svg)](https://codecov.io/gh/pascaliske/html-helpers)

## Installation

To install the module use the following commands:

```bash
$ yarn add @pascaliske/html-helpers
```

## Usage

### CSS modifier classes with namespace

In your `TS` code:

```typescript
import { modifiers } from '@pascaliske/html-helpers'

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
<!-- className: "cmp-section cmp-section--foo cmp-section--baz" -->
<div [className]="classes('cmp-section')"></div>
```

### CSS modifier classes without namespace

In your `TS` code:

```typescript
import { modifiers } from '@pascaliske/html-helpers'

@Component({
    selector: 'cmp-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
    public get classes(): string {
        return modifiers({
            foo: true,
            bar: false,
            baz: true,
        })
    }
}
```

In your `HTML` code:

```html
<!-- className: foo baz -->
<div [className]="classes"></div>
```

## License

MIT © [Pascal Iske](https://pascaliske.dev)
