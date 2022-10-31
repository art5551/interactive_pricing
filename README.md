# [Sass:Documentation](https://sass-lang.com/documentation/)
# [Markdown Guide](https://www.markdownguide.org/)

# To Begin This Project

## Enter the following on the command line
<br>  

1. Check to see if npm is installed / npm -v

2. Create the package.json / npm ini -y

3. Install sass globally / npm install -g sass

4. Install locally and save the app in the package.json file / npm install sass --save-dev

5. Check version and confirm sass was installed successfully / sass --version

6. Install parcel-bundler and save to json file / npm install parcel-bundler -save-dev

### Parcel Bundler Documentation

## [Parceljs.org](https://parceljs.org/)

<br>

### Add following to package.json script:
<br>
    
    "scripts": {
        "dev": "parcel src/index.html",
        "build": "parcel build src/index.html"
    },

## In development mode enter the following into command line to add scss to css file and open in development mode
<br>
    
     npm run dev

## When ready to push into production enter the following into command line to add scss to css file and optimize for production
<br>
    
    npm run build

## To rebuild node modules
<br>
    
    npm install

### [Net Ninja Sass Tutorial](https://www.youtube.com/watch?v=_kqN4hl9bGc)

### [freeCodeCamp](https://www.youtube.com/watch?v=_a5j7KoflTs)

### [KP @use and @forward video](https://www.youtube.com/watch?v=CR-a8upNjJ0)

# Components Incude

1. Badges | .badge - options badge-primary badge-secondary badge-error badge-info

        `.badge {
        border-radius: 80px;
        background-color: #f6c31c;
        padding: 0.1875rem 0.375rem;
        font-size: 0.75rem;
        font-weight: normal;
        }`


## Utilities

### Paddng includes padding(p), padding-left(pl) etc, pr, pt and pb with values 0-5

    "padding": (
        "prefix": "p",
        "values": (
        "0": 0,
        "1": $base-padding,
        "2": $base-padding * 2,
        "3": $base-padding * 4,
        "4": $base-padding * 6,
        "5": $base-padding * 8
        ),

### Margin includes margin(m), ml(margin-left0 etc, mr, mt and mb with values 0-5

    "margin": (
        "prefix": "m",
        "values": (
        "0": 0,
        "1": $base-margin,
        "2": $base-margin * 2,
        "3": $base-margin * 4,
        "4": $base-margin * 6,
        "5": $base-margin * 8
        ),
    ),

### Border radius

    "border-radius": (
        "prefix": "br",
        "values": (
        "default": $base-border-radius,
        "none": 0,
        "xs": math.div($base-border-radius, 4),
        "sm": math.div($base-border-radius, 2),
        "lg": $base-border-radius * 2,
        "full": 50%,
        )
    ),

### Display

    "display": (
        "prefix": "display",
        "values": (
        "n": none,
        "b": block,
        "f": flex,
        "i": inline,
        "i-b": inline-block
        )
    ),

### Font size (values are based on $base-font-size set in variables)

    "font-size": (
        "prefix": "font",
        "values": (
        "sm": $font-size-sm,
        "md": $base-font-size,
        "lg": $font-size-lg,
        "xl": $font-size-xl,
        "xxl": $font-size-xxl
        )
    )