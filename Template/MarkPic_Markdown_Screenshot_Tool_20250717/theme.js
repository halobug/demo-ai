const themes = {
    'default': `
        .prose {
            color: #23272f;
            font-family: 'Inter', 'system-ui', sans-serif;
            background: #f9fafb;
            border-radius: 1rem;
            box-shadow: 0 2px 16px 0 rgba(22, 93, 255, 0.05),0 1.5px 3px 0 rgba(80, 92, 127, 0.03);
            padding: 2rem;
            margin: 0;
        }
        .prose h1, .prose h2, .prose h3 {
            font-family: 'Montserrat', 'Inter', sans-serif;
            font-weight: 700;
            color: #165DFF;
            letter-spacing: .01em;
            margin-top: 1.6em;
            margin-bottom: .5em;
        }
        .prose h1 { font-size: 2.2em; border-bottom: 2px solid #E5E6EB; padding-bottom:.2em;}
        .prose h2 { font-size: 1.5em; border-bottom: 1px solid #E5E6EB; padding-bottom:.1em;}
        .prose h3 { font-size: 1.17em; }
        .prose a {
            color: #2563eb;
            text-decoration: underline;
            transition: color .2s;
        }
        .prose a:hover { color: #7B61FF; }
        .prose blockquote {
            border-left: 4px solid #7B61FF;
            background: #f3f0ff;
            color: #5b5773;
            margin: 1.5em 0;
            padding: .75em 1.25em;
            border-radius: 0 8px 8px 0;
            font-style: italic;
            font-size: 1.1em;
        }
        .prose code:not(pre code) {
            background: #e8f0fe;
            color: #165DFF;
            padding: 0.15em 0.45em;
            border-radius: .3em;
            font-size: .97em;
        }
        .prose pre {
            background: linear-gradient(90deg,#f3f9ff 0%,#e7eafc 100%);
            border: 1px solid #C9CDD4;
            border-radius: .6em;
            font-size: 1em;
            padding: 1.1em 1.3em;
            overflow-x: auto;
            margin: 1.25em 0;
        }
        .prose table {
            border-collapse: separate;
            border-spacing: 0;
            width: 100%;
            margin: 1.5em 0;
            background: #fff;
            box-shadow: 0 1px 3px 0 rgba(22, 93, 255, 0.06);
        }
        .prose table th, .prose table td {
            border: 1px solid #E5E6EB;
            padding: 0.5em 1em;
        }
        .prose table th {
            background: #F5F7FA;
            color: #165DFF;
            font-weight: 600;
        }
        .prose mark {
            background: linear-gradient(90deg, #FFF7D6 60%, #FAF3C0 100%);
            border-radius: .3em;
            padding: .1em .35em;
            color: #b47a00;
        }
        .prose ul, .prose ol {
            margin: 1.1em 0 1.1em 1.5em;
        }
        .prose li {
            margin-bottom: .45em;
        }
        .prose img {
            max-width: 100%;
            border-radius: .7em;
            box-shadow: 0 1.5px 10px 0 rgba(22,93,255,0.07);
            margin: 1.2em 0;
        }
        .prose hr {
            border: none;
            border-top: 2px solid #E5E6EB;
            margin: 2em 0;
        }
    `,
    'github': `
        .prose {
            color: #24292e;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
            background-color: #ffffff;
            border-radius: 6px;
            border: 1px solid #e1e4e8;
            padding: 2rem;
            margin: 0;
        }
        .prose h1, .prose h2 {
            padding-bottom: 0.3em;
            border-bottom: 1px solid #eaecef;
        }
        .prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6 {
            margin-top: 24px;
            margin-bottom: 16px;
            font-weight: 600;
            line-height: 1.25;
        }
        .prose h1 {
            font-size: 2em;
        }
        .prose h2 {
            font-size: 1.5em;
        }
        .prose h3 {
            font-size: 1.25em;
        }
        .prose a {
            color: #0366d6;
            text-decoration: none;
        }
        .prose a:hover {
            text-decoration: underline;
        }
        .prose blockquote {
            padding: 0 1em;
            color: #6a737d;
            border-left: 0.25em solid #dfe2e5;
            margin: 0 0 16px 0;
        }
        .prose code:not(pre code) {
            padding: 0.2em 0.4em;
            margin: 0;
            font-size: 85%;
            background-color: rgba(27,31,35,0.05);
            border-radius: 3px;
        }
        .prose pre {
            padding: 16px;
            overflow: auto;
            font-size: 85%;
            line-height: 1.45;
            background-color: #f6f8fa;
            border-radius: 3px;
            margin: 0 0 16px 0;
        }
        .prose table {
            display: block;
            width: 100%;
            overflow: auto;
            margin: 0 0 16px 0;
        }
        .prose table th {
            font-weight: 600;
        }
        .prose table th, .prose table td {
            padding: 6px 13px;
            border: 1px solid #dfe2e5;
        }
        .prose table tr {
            background-color: #ffffff;
            border-top: 1px solid #c6cbd1;
        }
        .prose table tr:nth-child(2n) {
            background-color: #f6f8fa;
        }
        .prose ul, .prose ol {
            padding-left: 2em;
            margin-top: 0;
            margin-bottom: 16px;
        }
        .prose li {
            margin-top: 0.25em;
        }
        .prose img {
            max-width: 100%;
            box-sizing: content-box;
            background-color: #ffffff;
            margin: 0 0 16px 0;
        }
        .prose hr {
            height: 0.25em;
            padding: 0;
            margin: 24px 0;
            background-color: #e1e4e8;
            border: 0;
        }
    `,
    'dark': `
        .prose {
            color: #e5e7eb;
            font-family: 'Inter', 'system-ui', sans-serif;
            background: #1e1b4b;
            border-radius: 1rem;
            box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.1),0 1.5px 3px 0 rgba(0, 0, 0, 0.06);
            padding: 2rem;
            margin: 0;
        }
        .prose h1, .prose h2, .prose h3 {
            font-family: 'Montserrat', 'Inter', sans-serif;
            font-weight: 700;
            color: #818cf8;
            letter-spacing: .01em;
            margin-top: 1.6em;
            margin-bottom: .5em;
        }
        .prose h1 { font-size: 2.2em; border-bottom: 2px solid #475569; padding-bottom:.2em;}
        .prose h2 { font-size: 1.5em; border-bottom: 1px solid #475569; padding-bottom:.1em;}
        .prose h3 { font-size: 1.17em; }
        .prose a {
            color: #a5b4fc;
            text-decoration: underline;
            transition: color .2s;
        }
        .prose a:hover { color: #c7d2fe; }
        .prose blockquote {
            border-left: 4px solid #a78bfa;
            background: #27272a;
            color: #d4d4d8;
            margin: 1.5em 0;
            padding: .75em 1.25em;
            border-radius: 0 8px 8px 0;
            font-style: italic;
            font-size: 1.1em;
        }
        .prose code:not(pre code) {
            background: #3b82f6;
            color: #eff6ff;
            padding: 0.15em 0.45em;
            border-radius: .3em;
            font-size: .97em;
        }
        .prose pre {
            background: #1e293b;
            border: 1px solid #334155;
            border-radius: .6em;
            font-size: 1em;
            padding: 1.1em 1.3em;
            overflow-x: auto;
            margin: 1.25em 0;
            color: #f8fafc;
        }
        .prose table {
            border-collapse: separate;
            border-spacing: 0;
            width: 100%;
            margin: 1.5em 0;
            background: #334155;
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
        }
        .prose table th, .prose table td {
            border: 1px solid #475569;
            padding: 0.5em 1em;
        }
        .prose table th {
            background: #1e293b;
            color: #94a3b8;
            font-weight: 600;
        }
        .prose mark {
            background: linear-gradient(90deg, #475569 60%, #5b21b6 100%);
            border-radius: .3em;
            padding: .1em .35em;
            color: #e0f2fe;
        }
        .prose ul, .prose ol {
            margin: 1.1em 0 1.1em 1.5em;
        }
        .prose li {
            margin-bottom: .45em;
        }
        .prose img {
            max-width: 100%;
            border-radius: .7em;
            box-shadow: 0 1.5px 10px 0 rgba(0, 0, 0, 0.1);
            margin: 1.2em 0;
            opacity: 0.9;
        }
        .prose hr {
            border: none;
            border-top: 2px solid #475569;
            margin: 2em 0;
        }
    `,
    'paper': `
        .prose {
            color: #333333;
            font-family: 'Georgia', 'serif';
            background: #f5f5dc;
            background-image: linear-gradient(to bottom, #f5f5dc 0%, #fff8dc 100%);
            border-radius: 4px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
            padding: 2rem;
            margin: 0;
            position: relative;
        }
        .prose::before {
            content: '';
            position: absolute;
            top: 0;
            left: 2.5rem;
            height: 100%;
            width: 1px;
            background-color: rgba(211, 211, 211, 0.7);
        }
        .prose h1, .prose h2, .prose h3 {
            font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif;
            font-weight: 700;
            color: #5d4037;
            letter-spacing: .01em;
            margin-top: 1.6em;
            margin-bottom: .5em;
        }
        .prose h1 { font-size: 2.2em; border-bottom: 2px solid #d2b48c; padding-bottom:.2em;}
        .prose h2 { font-size: 1.5em; border-bottom: 1px solid #d2b48c; padding-bottom:.1em;}
        .prose h3 { font-size: 1.17em; }
        .prose a {
            color: #8b4513;
            text-decoration: underline;
            transition: color .2s;
        }
        .prose a:hover { color: #a0522d; }
        .prose blockquote {
            border-left: 4px solid #a0522d;
            background: rgba(210, 180, 140, 0.1);
            color: #6d4c41;
            margin: 1.5em 0;
            padding: .75em 1.25em;
            border-radius: 0 8px 8px 0;
            font-style: italic;
            font-size: 1.1em;
        }
        .prose code:not(pre code) {
            background: rgba(210, 180, 140, 0.2);
            color: #5d4037;
            padding: 0.15em 0.45em;
            border-radius: .3em;
            font-size: .97em;
            font-family: 'Courier New', monospace;
        }
        .prose pre {
            background: rgba(210, 180, 140, 0.15);
            border: 1px solid #d2b48c;
            border-radius: .6em;
            font-size: 1em;
            padding: 1.1em 1.3em;
            overflow-x: auto;
            margin: 1.25em 0;
            font-family: 'Courier New', monospace;
        }
        .prose table {
            border-collapse: separate;
            border-spacing: 0;
            width: 100%;
            margin: 1.5em 0;
            background: rgba(255, 255, 255, 0.5);
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
        }
        .prose table th, .prose table td {
            border: 1px solid #d2b48c;
            padding: 0.5em 1em;
        }
        .prose table th {
            background: rgba(210, 180, 140, 0.2);
            color: #5d4037;
            font-weight: 600;
        }
        .prose mark {
            background: rgba(255, 215, 0, 0.3);
            border-radius: .3em;
            padding: .1em .35em;
            color: #333333;
        }
        .prose ul, .prose ol {
            margin: 1.1em 0 1.1em 1.5em;
        }
        .prose li {
            margin-bottom: .45em;
        }
        .prose img {
            max-width: 100%;
            border-radius: .7em;
            box-shadow: 0 1.5px 10px rgba(0, 0, 0, 0.1);
            margin: 1.2em 0;
        }
        .prose hr {
            border: none;
            border-top: 2px solid #d2b48c;
            margin: 2em 0;
        }
    `,
    'art-deco': `
                    .prose {
                        background: linear-gradient(120deg,#ffe8f3 20%,#c8d6ff 100%);
                        color: #2d2139;
                        font-family: 'Fira Sans', 'Montserrat', sans-serif;
                        border-radius: 1.5em;
                        box-shadow: 0 2px 18px 0 rgba(183, 102, 204, 0.13);
                        padding: 2.1rem 2.1rem;
                    }
                    .prose h1, .prose h2, .prose h3 {
                        color: #b766cc;
                        font-family: 'Bebas Neue', 'Montserrat', sans-serif;
                        letter-spacing: .05em;
                        text-transform: uppercase;
                        font-weight: 700;
                    }
                    .prose h1 { font-size: 2.15em;}
                    .prose h2 { font-size: 1.32em;}
                    .prose h3 { font-size: 1.13em;}
                    .prose a { color: #2e6cff; text-decoration: underline; }
                    .prose a:hover { color: #b766cc;}
                    .prose blockquote {
                        border-left: 5px solid #b766cc;
                        background: #f6edff;
                        color: #6e57a4;
                        padding: .8em 1.1em;
                        border-radius: 0 1.5em 1.5em 0;
                        font-style: italic;
                    }
                    .prose code:not(pre code) {
                        background: #f2e0fa;
                        color: #6e57a4;
                        padding: 0.13em 0.42em;
                        border-radius: .3em;
                        font-size: .97em;
                    }
                    .prose pre {
                        background: #f6edff;
                        border-radius: 1em;
                        padding: 1em 1.3em;
                        border: 1px solid #b766cc;
                        margin: 1.25em 0;
                        font-size: 1em;
                        overflow-x: auto;
                    }
                    .prose table {
                        border-collapse: collapse;
                        width: 100%;
                        margin: 1.5em 0;
                    }
                    .prose th, .prose td {
                        border: 1.5px solid #b766cc;
                        padding: .6em 1em;
                        background: #faf4fb;
                    }
                    .prose th {
                        background: #e9d7fa;
                        color: #b766cc;
                        font-weight: 600;
                    }
                    .prose mark {
                        background: #f7e3fe;
                        color: #6e57a4;
                        border-radius: .2em;
                        padding: .08em .33em;
                    }
                    .prose ul, .prose ol { margin-left: 1.4em; }
                    .prose img {
                        max-width: 100%;
                        border-radius: 1em;
                        box-shadow: 0 2px 20px 0 rgba(183, 102, 204, 0.13);
                        margin: 1.3em 0;
                    }
                    .prose hr {
                        border: none;
                        border-top: 2px dotted #b766cc;
                        margin: 2em 0;
                    }
                `,
    'alibaba-orange': `
        .prose {
            color: #333;
            font-family: 'PingFang SC', 'Helvetica Neue', 'Arial', sans-serif;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
            padding: 2rem;
            margin: 0;
        }
        .prose h1, .prose h2, .prose h3 {
            font-weight: 700;
            color: #ff6a00;
            letter-spacing: .01em;
            margin-top: 1.6em;
            margin-bottom: .5em;
        }
        .prose h1 { font-size: 2.2em; border-bottom: 2px solid #ff6a00; padding-bottom:.2em;}
        .prose h2 { font-size: 1.5em; border-bottom: 1px solid #ff6a00; padding-bottom:.1em;}
        .prose h3 { font-size: 1.17em; }
        .prose a {
            color: #ff6a00;
            text-decoration: none;
            transition: color .2s;
        }
        .prose a:hover { color: #e65c00; }
        .prose blockquote {
            border-left: 4px solid #ff6a00;
            background: rgba(255, 106, 0, 0.05);
            color: #555;
            margin: 1.5em 0;
            padding: .75em 1.25em;
            border-radius: 0 4px 4px 0;
            font-style: italic;
            font-size: 1.1em;
        }
        .prose code:not(pre code) {
            background: rgba(255, 106, 0, 0.1);
            color: #ff6a00;
            padding: 0.15em 0.45em;
            border-radius: 4px;
            font-size: .97em;
        }
        .prose pre {
            background: #f5f5f5;
            border: 1px solid #e5e5e5;
            border-radius: 4px;
            font-size: 1em;
            padding: 1.1em 1.3em;
            overflow-x: auto;
            margin: 1.25em 0;
            color: #333;
        }
        .prose table {
            border-collapse: separate;
            border-spacing: 0;
            width: 100%;
            margin: 1.5em 0;
            background: #fff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
        }
        .prose table th, .prose table td {
            border: 1px solid #e5e5e5;
            padding: 0.5em 1em;
        }
        .prose table th {
            background: rgba(255, 106, 0, 0.1);
            color: #ff6a00;
            font-weight: 600;
        }
        .prose mark {
            background: rgba(255, 106, 0, 0.2);
            border-radius: 4px;
            padding: .1em .35em;
            color: #333;
        }
        .prose ul, .prose ol {
            margin: 1.1em 0 1.1em 1.5em;
        }
        .prose li {
            margin-bottom: .45em;
        }
        .prose img {
            max-width: 100%;
            border-radius: 4px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            margin: 1.2em 0;
        }
        .prose hr {
            border: none;
            border-top: 2px solid #ff6a00;
            margin: 2em 0;
        }
    `,
    'bytedance': `
        .prose {
            color: #333;
            font-family: 'Inter', 'system-ui', sans-serif;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
            padding: 2rem;
            margin: 0;
        }
        .prose h1, .prose h2, .prose h3 {
            font-weight: 700;
            color: #2080ff;
            letter-spacing: .01em;
            margin-top: 1.6em;
            margin-bottom: .5em;
        }
        .prose h1 { font-size: 2.2em; border-bottom: 2px solid #2080ff; padding-bottom:.2em;}
        .prose h2 { font-size: 1.5em; border-bottom: 1px solid #2080ff; padding-bottom:.1em;}
        .prose h3 { font-size: 1.17em; }
        .prose a {
            color: #2080ff;
            text-decoration: none;
            transition: color .2s;
        }
        .prose a:hover { color: #0066cc; }
        .prose blockquote {
            border-left: 4px solid #2080ff;
            background: rgba(32, 128, 255, 0.05);
            color: #555;
            margin: 1.5em 0;
            padding: .75em 1.25em;
            border-radius: 0 4px 4px 0;
            font-style: italic;
            font-size: 1.1em;
        }
        .prose code:not(pre code) {
            background: rgba(32, 128, 255, 0.1);
            color: #2080ff;
            padding: 0.15em 0.45em;
            border-radius: 4px;
            font-size: .97em;
        }
        .prose pre {
            background: #f5f5f5;
            border: 1px solid #e5e5e5;
            border-radius: 4px;
            font-size: 1em;
            padding: 1.1em 1.3em;
            overflow-x: auto;
            margin: 1.25em 0;
            color: #333;
        }
        .prose table {
            border-collapse: separate;
            border-spacing: 0;
            width: 100%;
            margin: 1.5em 0;
            background: #fff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
        }
        .prose table th, .prose table td {
            border: 1px solid #e5e5e5;
            padding: 0.5em 1em;
        }
        .prose table th {
            background: rgba(32, 128, 255, 0.1);
            color: #2080ff;
            font-weight: 600;
        }
        .prose mark {
            background: rgba(32, 128, 255, 0.2);
            border-radius: 4px;
            padding: .1em .35em;
            color: #333;
        }
        .prose ul, .prose ol {
            margin: 1.1em 0 1.1em 1.5em;
        }
        .prose li {
            margin-bottom: .45em;
        }
        .prose img {
            max-width: 100%;
            border-radius: 4px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            margin: 1.2em 0;
        }
        .prose hr {
            border: none;
            border-top: 2px solid #2080ff;
            margin: 2em 0;
        }
    `,
    'pop-art': `
        .prose {
            color: #333;
            font-family: 'Comic Sans MS', 'Chalkboard SE', sans-serif;
            background: #fff;
            border: 4px solid #000;
            padding: 2rem;
            margin: 0;
            position: relative;
            overflow: hidden;
        }
        .prose::before {
            content: '';
            position: absolute;
            top: -20px;
            left: -20px;
            right: -20px;
            bottom: -20px;
            background-image:
                radial-gradient(circle, #ff0000 5px, transparent 5px),
                radial-gradient(circle, #0000ff 5px, transparent 5px),
                radial-gradient(circle, #ffff00 5px, transparent 5px);
            background-size: 40px 40px;
            background-position: 0 0, 20px 20px, 10px 10px;
            opacity: 0.1;
            pointer-events: none;
        }
        .prose h1, .prose h2, .prose h3 {
            font-weight: 700;
            letter-spacing: .05em;
            margin-top: 1.6em;
            margin-bottom: .5em;
            text-transform: uppercase;
        }
        .prose h1 {
            font-size: 2.5em;
            color: #ff0000;
            text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000;
            border-bottom: 4px solid #000;
            padding-bottom:.2em;
            text-align: center;
        }
        .prose h2 {
            font-size: 1.8em;
            color: #0000ff;
            text-shadow: 1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;
            border-left: 6px solid #000;
            padding-left: 1rem;
            border-bottom: none;
        }
        .prose h3 {
            font-size: 1.3em;
            color: #ffff00;
            text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
        }
        .prose a {
            color: #00ff00;
            text-decoration: none;
            font-weight: 700;
            transition: color .2s;
            position: relative;
        }
        .prose a:hover {
            color: #ff00ff;
        }
        .prose a::after {
            content: '»';
            margin-left: 0.3em;
        }
        .prose blockquote {
            border: 3px dashed #ff0000;
            background: rgba(255, 255, 0, 0.3);
            color: #000;
            margin: 1.5em 0;
            padding: 1em;
            border-radius: 0;
            font-style: italic;
            font-size: 1.1em;
        }
        .prose code:not(pre code) {
            background: #000;
            color: #fff;
            padding: 0.15em 0.45em;
            border-radius: 0;
            font-size: .97em;
            font-family: 'Courier New', monospace;
            font-weight: bold;
        }
        .prose pre {
            background: #000;
            border: 3px solid #ffff00;
            border-radius: 0;
            font-size: 1em;
            padding: 1.1em 1.3em;
            overflow-x: auto;
            margin: 1.25em 0;
            color: #00ff00;
            font-family: 'Courier New', monospace;
        }
        .prose table {
            border-collapse: collapse;
            width: 100%;
            margin: 1.5em 0;
            background: #fff;
        }
        .prose table th, .prose table td {
            border: 2px solid #000;
            padding: 0.5em 1em;
        }
        .prose table th {
            background: #ff0000;
            color: #fff;
            font-weight: 700;
            text-transform: uppercase;
        }
        .prose table tr:nth-child(even) {
            background: rgba(0, 0, 255, 0.1);
        }
        .prose mark {
            background: #ffff00;
            border-radius: 0;
            padding: .1em .35em;
            color: #000;
            font-weight: 700;
        }
        .prose ul, .prose ol {
            margin: 1.1em 0 1.1em 1.5em;
        }
        .prose ul {
            list-style: none;
        }
        .prose ul li::before {
            content: '★';
            color: #ff00ff;
            display: inline-block;
            width: 1.2em;
            margin-left: -1.2em;
        }
        .prose ol {
            list-style-type: none;
            counter-reset: item;
        }
        .prose ol li::before {
            content: counter(item) '. ';
            counter-increment: item;
            color: #0000ff;
            font-weight: bold;
        }
        .prose li {
            margin-bottom: .75em;
        }
        .prose img {
            max-width: 100%;
            border-radius: 0;
            box-shadow: 0 0 0 4px #000;
            margin: 1.2em 0;
            filter: saturate(1.5);
        }
        .prose hr {
            border: none;
            height: 6px;
            background: repeating-linear-gradient(
                45deg,
                #ff0000,
                #ff0000 10px,
                #0000ff 10px,
                #0000ff 20px
            );
            margin: 2em 0;
        }
    `,
    'coil-notebook': `
        .prose {
            color: #333;
            font-family: 'Comic Sans MS', 'Chalkboard SE', sans-serif;
            background: #fff;
            background-image:
                linear-gradient(90deg, transparent 29px, #aaa 30px, transparent 31px),
                linear-gradient(#eee 0.1em, transparent 0.1em);
            background-size: 100% 1.5em;
            padding: 2rem 2rem 2rem 4rem;
            margin: 0;
            border-left: 2px solid #aaa;
            border-right: 2px solid #aaa;
            position: relative;
        }
        .prose::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 20px;
            background-image: radial-gradient(circle, #666 4px, transparent 5px);
            background-size: 30px 20px;
            background-position: 15px 0;
        }
        .prose h1, .prose h2, .prose h3 {
            font-weight: 700;
            color: #333;
            letter-spacing: .01em;
            margin-top: 1.6em;
            margin-bottom: .5em;
        }
        .prose h1 { font-size: 2.2em; text-decoration: underline; }
        .prose h2 { font-size: 1.5em; text-decoration: underline; }
        .prose h3 { font-size: 1.17em; text-decoration: underline; }
        .prose a {
            color: #2563eb;
            text-decoration: underline;
            transition: color .2s;
        }
        .prose a:hover { color: #7B61FF; }
        .prose blockquote {
            border-left: 4px solid #7B61FF;
            background: rgba(123, 97, 255, 0.05);
            color: #555;
            margin: 1.5em 0;
            padding: .75em 1.25em;
            border-radius: 0 4px 4px 0;
            font-style: italic;
            font-size: 1.1em;
        }
        .prose code:not(pre code) {
            background: rgba(22, 93, 255, 0.1);
            color: #165DFF;
            padding: 0.15em 0.45em;
            border-radius: .3em;
            font-size: .97em;
        }
        .prose pre {
            background: rgba(22, 93, 255, 0.05);
            border: 1px solid rgba(22, 93, 255, 0.2);
            border-radius: .6em;
            font-size: 1em;
            padding: 1.1em 1.3em;
            overflow-x: auto;
            margin: 1.25em 0;
        }
        .prose table {
            border-collapse: separate;
            border-spacing: 0;
            width: 100%;
            margin: 1.5em 0;
            background: #fff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
        }
        .prose table th, .prose table td {
            border: 1px solid #ddd;
            padding: 0.5em 1em;
        }
        .prose table th {
            background: rgba(22, 93, 255, 0.1);
            color: #165DFF;
            font-weight: 600;
        }
        .prose mark {
            background: rgba(255, 255, 0, 0.3);
            border-radius: .3em;
            padding: .1em .35em;
            color: #333;
        }
        .prose ul, .prose ol {
            margin: 1.1em 0 1.1em 1.5em;
        }
        .prose li {
            margin-bottom: .45em;
        }
        .prose img {
            max-width: 100%;
            border-radius: .7em;
            box-shadow: 0 1.5px 10px rgba(0, 0, 0, 0.1);
            margin: 1.2em 0;
        }
        .prose hr {
            border: none;
            border-top: 2px dashed #aaa;
            margin: 2em 0;
        }
    `,
    'apple-notes': `
        .prose {
            color: #333;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            background: #fff;
            border-radius: 12px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            margin: 0;
            position: relative;
        }
        .prose::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 8px;
            border-radius: 12px 12px 0 0;
            background: linear-gradient(90deg, #FF5E5E, #FFBD44, #4CD964, #5AC8FA, #5856D6, #FF2D55);
        }
        .prose h1, .prose h2, .prose h3 {
            font-weight: 700;
            color: #333;
            letter-spacing: .01em;
            margin-top: 1.6em;
            margin-bottom: .5em;
        }
        .prose h1 { font-size: 2.2em; }
        .prose h2 { font-size: 1.5em; }
        .prose h3 { font-size: 1.17em; }
        .prose a {
            color: #007AFF;
            text-decoration: none;
            transition: color .2s;
        }
        .prose a:hover { color: #0051CC; }
        .prose blockquote {
            border-left: 3px solid #007AFF;
            background: rgba(0, 122, 255, 0.05);
            color: #555;
            margin: 1.5em 0;
            padding: .75em 1.25em;
            border-radius: 0 4px 4px 0;
            font-style: italic;
            font-size: 1.1em;
        }
        .prose code:not(pre code) {
            background: rgba(0, 122, 255, 0.1);
            color: #007AFF;
            padding: 0.15em 0.45em;
            border-radius: 4px;
            font-size: .97em;
        }
        .prose pre {
            background: #f7f7f7;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            font-size: 1em;
            padding: 1.1em 1.3em;
            overflow-x: auto;
            margin: 1.25em 0;
            color: #333;
        }
        .prose table {
            border-collapse: separate;
            border-spacing: 0;
            width: 100%;
            margin: 1.5em 0;
            background: #fff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
        }
        .prose table th, .prose table td {
            border: 1px solid #e0e0e0;
            padding: 0.5em 1em;
        }
        .prose table th {
            background: rgba(0, 122, 255, 0.1);
            color: #007AFF;
            font-weight: 600;
        }
        .prose mark {
            background: rgba(255, 214, 10, 0.3);
            border-radius: 4px;
            padding: .1em .35em;
            color: #333;
        }
        .prose ul, .prose ol {
            margin: 1.1em 0 1.1em 1.5em;
        }
        .prose li {
            margin-bottom: .45em;
        }
        .prose img {
            max-width: 100%;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            margin: 1.2em 0;
        }
        .prose hr {
            border: none;
            border-top: 1px solid #e0e0e0;
            margin: 2em 0;
        }
    `,
    'social-media': `
        .prose {
            color: #333;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
            padding: 1.5rem;
            margin: 0;
        }
        .prose h1, .prose h2, .prose h3 {
            font-weight: 700;
            color: #1877f2;
            letter-spacing: .01em;
            margin-top: 1.6em;
            margin-bottom: .5em;
        }
        .prose h1 { font-size: 1.75em; }
        .prose h2 { font-size: 1.25em; }
        .prose h3 { font-size: 1.1em; }
        .prose a {
            color: #1877f2;
            text-decoration: none;
            transition: color .2s;
        }
        .prose a:hover { color: #165DFF; }
        .prose blockquote {
            border-left: 4px solid #1877f2;
            background: rgba(24, 119, 242, 0.05);
            color: #555;
            margin: 1.5em 0;
            padding: .75em 1.25em;
            border-radius: 0 4px 4px 0;
            font-style: italic;
            font-size: 1.1em;
        }
        .prose code:not(pre code) {
            background: rgba(24, 119, 242, 0.1);
            color: #1877f2;
            padding: 0.15em 0.45em;
            border-radius: 4px;
            font-size: .97em;
        }
        .prose pre {
            background: #f5f5f5;
            border: 1px solid #e5e5e5;
            border-radius: 4px;
            font-size: 1em;
            padding: 1.1em 1.3em;
            overflow-x: auto;
            margin: 1.25em 0;
            color: #333;
        }
        .prose table {
            border-collapse: separate;
            border-spacing: 0;
            width: 100%;
            margin: 1.5em 0;
            background: #fff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
        }
        .prose table th, .prose table td {
            border: 1px solid #e5e5e5;
            padding: 0.5em 1em;
        }
        .prose table th {
            background: rgba(24, 119, 242, 0.1);
            color: #1877f2;
            font-weight: 600;
        }
        .prose mark {
            background: rgba(24, 119, 242, 0.2);
            border-radius: 4px;
            padding: .1em .35em;
            color: #333;
        }
        .prose ul, .prose ol {
            margin: 1.1em 0 1.1em 1.5em;
        }
        .prose li {
            margin-bottom: .45em;
        }
        .prose img {
            max-width: 100%;
            border-radius: 4px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            margin: 1.2em 0;
        }
        .prose hr {
            border: none;
            border-top: 1px solid #e5e5e5;
            margin: 2em 0;
        }
    `,
    'modern-minimal': `
        .prose {
            color: #333;
            font-family: 'Inter', 'system-ui', sans-serif;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
            padding: 2rem;
            margin: 0;
        }
        .prose h1, .prose h2, .prose h3 {
            font-weight: 700;
            color: #222;
            letter-spacing: .01em;
            margin-top: 1.6em;
            margin-bottom: .5em;
        }
        .prose h1 { font-size: 2.2em; }
        .prose h2 { font-size: 1.5em; }
        .prose h3 { font-size: 1.17em; }
        .prose a {
            color: #165DFF;
            text-decoration: none;
            border-bottom: 1px solid #165DFF;
            transition: all .2s;
        }
        .prose a:hover {
            color: #0F3BA1;
            border-bottom-color: #0F3BA1;
        }
        .prose blockquote {
            border-left: 3px solid #165DFF;
            background: rgba(22, 93, 255, 0.03);
            color: #555;
            margin: 1.5em 0;
            padding: .75em 1.25em;
            border-radius: 0 4px 4px 0;
            font-style: italic;
            font-size: 1.1em;
        }
        .prose code:not(pre code) {
            background: rgba(22, 93, 255, 0.07);
            color: #165DFF;
            padding: 0.15em 0.45em;
            border-radius: 4px;
            font-size: .97em;
        }
        .prose pre {
            background: #f8f9fa;
            border: 1px solid #e9ecef;
            border-radius: 6px;
            font-size: 1em;
            padding: 1.1em 1.3em;
            overflow-x: auto;
            margin: 1.25em 0;
            color: #333;
        }
        .prose table {
            border-collapse: separate;
            border-spacing: 0;
            width: 100%;
            margin: 1.5em 0;
            background: #fff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        .prose table th, .prose table td {
            border: 1px solid #e9ecef;
            padding: 0.5em 1em;
        }
        .prose table th {
            background: #f8f9fa;
            color: #222;
            font-weight: 600;
        }
        .prose mark {
            background: rgba(255, 214, 10, 0.2);
            border-radius: 4px;
            padding: .1em .35em;
            color: #333;
        }
        .prose ul, .prose ol {
            margin: 1.1em 0 1.1em 1.5em;
        }
        .prose li {
            margin-bottom: .45em;
        }
        .prose img {
            max-width: 100%;
            border-radius: 6px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
            margin: 1.2em 0;
            transition: transform .2s;
        }
        .prose img:hover {
            transform: translateY(-2px);
        }
        .prose hr {
            border: none;
            border-top: 1px solid #e9ecef;
            margin: 2em 0;
        }
    `,
    'fresh-natural': `
        .prose {
            color: #333;
            font-family: 'Georgia', 'serif';
            background: #f8f5f0;
            background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" fill-opacity="0.05"><rect x="2" width="2" height="2"/><rect y="2" width="2" height="2"/></svg>');
            border-radius: 8px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
            padding: 2rem;
            margin: 0;
        }
        .prose h1, .prose h2, .prose h3 {
            font-family: 'Montserrat', 'sans-serif';
            font-weight: 700;
            color: #4a6f4e;
            letter-spacing: .01em;
            margin-top: 1.6em;
            margin-bottom: .5em;
        }
        .prose h1 { font-size: 2.2em; border-bottom: 2px solid #d2c7b5; padding-bottom:.2em;}
        .prose h2 { font-size: 1.5em; border-bottom: 1px solid #d2c7b5; padding-bottom:.1em;}
        .prose h3 { font-size: 1.17em; }
        .prose a {
            color: #6b8e23;
            text-decoration: none;
            border-bottom: 1px solid #6b8e23;
            transition: all .2s;
        }
        .prose a:hover {
            color: #556b2f;
            border-bottom-color: #556b2f;
        }
        .prose blockquote {
            border-left: 4px solid #6b8e23;
            background: rgba(107, 142, 35, 0.05);
            color: #555;
            margin: 1.5em 0;
            padding: .75em 1.25em;
            border-radius: 0 4px 4px 0;
            font-style: italic;
            font-size: 1.1em;
        }
        .prose code:not(pre code) {
            background: rgba(107, 142, 35, 0.1);
            color: #6b8e23;
            padding: 0.15em 0.45em;
            border-radius: 4px;
            font-size: .97em;
        }
        .prose pre {
            background: #e9e5dd;
            border: 1px solid #d2c7b5;
            border-radius: 6px;
            font-size: 1em;
            padding: 1.1em 1.3em;
            overflow-x: auto;
            margin: 1.25em 0;
            color: #333;
        }
        .prose table {
            border-collapse: separate;
            border-spacing: 0;
            width: 100%;
            margin: 1.5em 0;
            background: #fff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        .prose table th, .prose table td {
            border: 1px solid #d2c7b5;
            padding: 0.5em 1em;
        }
        .prose table th {
            background: #e9e5dd;
            color: #4a6f4e;
            font-weight: 600;
        }
        .prose mark {
            background: rgba(255, 214, 10, 0.3);
            border-radius: 4px;
            padding: .1em .35em;
            color: #333;
        }
        .prose ul, .prose ol {
            margin: 1.1em 0 1.1em 1.5em;
        }
        .prose li {
            margin-bottom: .45em;
        }
        .prose img {
            max-width: 100%;
            border-radius: 6px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            margin: 1.2em 0;
            filter: sepia(10%);
        }
        .prose hr {
            border: none;
            border-top: 2px solid #d2c7b5;
            margin: 2em 0;
        }
    `,
    'glassmorphism': `
        .prose {
            color: #333;
            font-family: 'Inter', 'system-ui', sans-serif;
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            margin: 0;
        }
        .prose h1, .prose h2, .prose h3 {
            font-weight: 700;
            color: #165DFF;
            letter-spacing: .01em;
            margin-top: 1.6em;
            margin-bottom: .5em;
        }
        .prose h1 { font-size: 2.2em; }
        .prose h2 { font-size: 1.5em; }
        .prose h3 { font-size: 1.17em; }
        .prose a {
            color: #165DFF;
            text-decoration: none;
            border-bottom: 1px solid #165DFF;
            transition: all .2s;
        }
        .prose a:hover {
            color: #0F3BA1;
            border-bottom-color: #0F3BA1;
        }
        .prose blockquote {
            border-left: 4px solid #165DFF;
            background: rgba(22, 93, 255, 0.05);
            color: #555;
            margin: 1.5em 0;
            padding: .75em 1.25em;
            border-radius: 0 4px 4px 0;
            font-style: italic;
            font-size: 1.1em;
        }
        .prose code:not(pre code) {
            background: rgba(22, 93, 255, 0.1);
            color: #165DFF;
            padding: 0.15em 0.45em;
            border-radius: 4px;
            font-size: .97em;
        }
        .prose pre {
            background: rgba(248, 249, 250, 0.7);
            border: 1px solid rgba(233, 236, 239, 0.7);
            border-radius: 6px;
            font-size: 1em;
            padding: 1.1em 1.3em;
            overflow-x: auto;
            margin: 1.25em 0;
            color: #333;
        }
        .prose table {
            border-collapse: separate;
            border-spacing: 0;
            width: 100%;
            margin: 1.5em 0;
            background: rgba(255, 255, 255, 0.7);
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        .prose table th, .prose table td {
            border: 1px solid rgba(233, 236, 239, 0.7);
            padding: 0.5em 1em;
        }
        .prose table th {
            background: rgba(248, 249, 250, 0.7);
            color: #222;
            font-weight: 600;
        }
        .prose mark {
            background: rgba(255, 214, 10, 0.3);
            border-radius: 4px;
            padding: .1em .35em;
            color: #333;
        }
        .prose ul, .prose ol {
            margin: 1.1em 0 1.1em 1.5em;
        }
        .prose li {
            margin-bottom: .45em;
        }
        .prose img {
            max-width: 100%;
            border-radius: 6px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            margin: 1.2em 0;
            opacity: 0.95;
        }
        .prose hr {
            border: none;
            border-top: 1px solid rgba(233, 236, 239, 0.7);
            margin: 2em 0;
        }
    `,
    'warm-soft': `
        .prose {
            color: #4a453e;
            font-family: 'Cormorant Garamond', 'Georgia', serif;
            background: #f8f4e9;
            border-radius: 8px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
            padding: 2rem;
            margin: 0;
        }
        .prose h1, .prose h2, .prose h3 {
            font-weight: 700;
            color: #8b6e5e;
            letter-spacing: .01em;
            margin-top: 1.6em;
            margin-bottom: .5em;
        }
        .prose h1 { font-size: 2.2em; border-bottom: 2px solid #d8cbb9; padding-bottom:.2em;}
        .prose h2 { font-size: 1.5em; border-bottom: 1px solid #d8cbb9; padding-bottom:.1em;}
        .prose h3 { font-size: 1.17em; }
        .prose a {
            color: #8b6e5e;
            text-decoration: none;
            border-bottom: 1px solid #d8cbb9;
            transition: all .2s;
        }
        .prose a:hover {
            color: #6b5447;
            border-bottom-color: #6b5447;
        }
        .prose blockquote {
            border-left: 4px solid #8b6e5e;
            background: rgba(139, 110, 94, 0.05);
            color: #6a6359;
            margin: 1.5em 0;
            padding: .75em 1.25em;
            border-radius: 0 4px 4px 0;
            font-style: italic;
            font-size: 1.1em;
        }
        .prose code:not(pre code) {
            background: rgba(139, 110, 94, 0.1);
            color: #8b6e5e;
            padding: 0.15em 0.45em;
            border-radius: 4px;
            font-size: .97em;
        }
        .prose pre {
            background: #e9e3d5;
            border: 1px solid #d8cbb9;
            border-radius: 6px;
            font-size: 1em;
            padding: 1.1em 1.3em;
            overflow-x: auto;
            margin: 1.25em 0;
            color: #4a453e;
        }
        .prose table {
            border-collapse: separate;
            border-spacing: 0;
            width: 100%;
            margin: 1.5em 0;
            background: #fff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        .prose table th, .prose table td {
            border: 1px solid #d8cbb9;
            padding: 0.5em 1em;
        }
        .prose table th {
            background: #e9e3d5;
            color: #8b6e5e;
            font-weight: 600;
        }
        .prose mark {
            background: rgba(247, 214, 126, 0.3);
            border-radius: 4px;
            padding: .1em .35em;
            color: #4a453e;
        }
        .prose ul, .prose ol {
            margin: 1.1em 0 1.1em 1.5em;
        }
        .prose li {
            margin-bottom: .45em;
        }
        .prose img {
            max-width: 100%;
            border-radius: 6px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            margin: 1.2em 0;
            filter: sepia(10%);
        }
        .prose hr {
            border: none;
            border-top: 2px solid #d8cbb9;
            margin: 2em 0;
        }
    `,
    'minimal-gray': `
        .prose {
            color: #444;
            font-family: 'Inter', 'system-ui', sans-serif;
            background: #f9f9f9;
            border-radius: 8px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
            padding: 2rem;
            margin: 0;
        }
        .prose h1, .prose h2, .prose h3 {
            font-weight: 700;
            color: #222;
            letter-spacing: .01em;
            margin-top: 1.6em;
            margin-bottom: .5em;
        }
        .prose h1 { font-size: 2.2em; border-bottom: 2px solid #e0e0e0; padding-bottom:.2em;}
        .prose h2 { font-size: 1.5em; border-bottom: 1px solid #e0e0e0; padding-bottom:.1em;}
        .prose h3 { font-size: 1.17em; }
        .prose a {
            color: #666;
            text-decoration: none;
            border-bottom: 1px solid #999;
            transition: all .2s;
        }
        .prose a:hover {
            color: #222;
            border-bottom-color: #222;
        }
        .prose blockquote {
            border-left: 4px solid #999;
            background: rgba(200, 200, 200, 0.05);
            color: #666;
            margin: 1.5em 0;
            padding: .75em 1.25em;
            border-radius: 0 4px 4px 0;
            font-style: italic;
            font-size: 1.1em;
        }
        .prose code:not(pre code) {
            background: rgba(200, 200, 200, 0.1);
            color: #666;
            padding: 0.15em 0.45em;
            border-radius: 4px;
            font-size: .97em;
        }
        .prose pre {
            background: #f0f0f0;
            border: 1px solid #e0e0e0;
            border-radius: 6px;
            font-size: 1em;
            padding: 1.1em 1.3em;
            overflow-x: auto;
            margin: 1.25em 0;
            color: #444;
        }
        .prose table {
            border-collapse: separate;
            border-spacing: 0;
            width: 100%;
            margin: 1.5em 0;
            background: #fff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        .prose table th, .prose table td {
            border: 1px solid #e0e0e0;
            padding: 0.5em 1em;
        }
        .prose table th {
            background: #f0f0f0;
            color: #222;
            font-weight: 600;
        }
        .prose mark {
            background: rgba(255, 214, 10, 0.2);
            border-radius: 4px;
            padding: .1em .35em;
            color: #444;
        }
        .prose ul, .prose ol {
            margin: 1.1em 0 1.1em 1.5em;
        }
        .prose li {
            margin-bottom: .45em;
        }
        .prose img {
            max-width: 100%;
            border-radius: 6px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            margin: 1.2em 0;
            opacity: 0.95;
        }
        .prose hr {
            border: none;
            border-top: 2px solid #e0e0e0;
            margin: 2em 0;
        }
    `,
    'dream-gradient': `
        .prose {
            color: #333;
            font-family: 'Inter', 'system-ui', sans-serif;
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e5e6 100%);
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            margin: 0;
            position: relative;
            overflow: hidden;
        }
        .prose::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, #84fab0, #8fd3f4);
        }
        .prose h1, .prose h2, .prose h3 {
            font-weight: 700;
            letter-spacing: .01em;
            margin-top: 1.6em;
            margin-bottom: .5em;
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
        }
        .prose h1 {
            font-size: 2.2em;
            background-image: linear-gradient(90deg, #84fab0, #8fd3f4);
        }
        .prose h2 {
            font-size: 1.5em;
            background-image: linear-gradient(90deg, #74ebd5, #9face6);
        }
        .prose h3 {
            font-size: 1.17em;
            background-image: linear-gradient(90deg, #a1c4fd, #c2e9fb);
        }
        .prose a {
            color: #84fab0;
            text-decoration: none;
            background-image: linear-gradient(90deg, #84fab0, #8fd3f4);
            background-size: 0% 2px;
            background-position: 0% 100%;
            background-repeat: no-repeat;
            transition: background-size .3s;
        }
        .prose a:hover {
            background-size: 100% 2px;
        }
        .prose blockquote {
            border-left: 4px solid #84fab0;
            background: rgba(132, 250, 176, 0.1);
            color: #555;
            margin: 1.5em 0;
            padding: .75em 1.25em;
            border-radius: 0 4px 4px 0;
            font-style: italic;
            font-size: 1.1em;
        }
        .prose code:not(pre code) {
            background: rgba(132, 250, 176, 0.2);
            color: #4a9c69;
            padding: 0.15em 0.45em;
            border-radius: 4px;
            font-size: .97em;
        }
        .prose pre {
            background: rgba(255, 255, 255, 0.7);
            border: 1px solid rgba(200, 200, 200, 0.5);
            border-radius: 6px;
            font-size: 1em;
            padding: 1.1em 1.3em;
            overflow-x: auto;
            margin: 1.25em 0;
            color: #333;
        }
        .prose table {
            border-collapse: separate;
            border-spacing: 0;
            width: 100%;
            margin: 1.5em 0;
            background: rgba(255, 255, 255, 0.7);
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        .prose table th, .prose table td {
            border: 1px solid rgba(200, 200, 200, 0.5);
            padding: 0.5em 1em;
        }
        .prose table th {
            background: rgba(132, 250, 176, 0.2);
            color: #4a9c69;
            font-weight: 600;
        }
        .prose mark {
            background: linear-gradient(90deg, rgba(255, 214, 10, 0.2), rgba(255, 190, 10, 0.3));
            border-radius: 4px;
            padding: .1em .35em;
            color: #333;
        }
        .prose ul, .prose ol {
            margin: 1.1em 0 1.1em 1.5em;
        }
        .prose li {
            margin-bottom: .45em;
        }
        .prose img {
            max-width: 100%;
            border-radius: 6px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            margin: 1.2em 0;
            filter: brightness(1.05);
        }
        .prose hr {
            border: none;
            border-top: 2px solid rgba(200, 200, 200, 0.5);
            margin: 2em 0;
        }
    `,
    'xiaohongshu-purple': `
        .prose {
            color: #333;
            font-family: 'PingFang SC', 'Helvetica Neue', 'Arial', sans-serif;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
            padding: 2rem;
            margin: 0;
        }
        .prose h1, .prose h2, .prose h3 {
            font-weight: 700;
            color: #fe2c55;
            letter-spacing: .01em;
            margin-top: 1.6em;
            margin-bottom: .5em;
        }
        .prose h1 { font-size: 2.2em; }
        .prose h2 { font-size: 1.5em; }
        .prose h3 { font-size: 1.17em; }
        .prose a {
            color: #fe2c55;
            text-decoration: none;
            transition: color .2s;
        }
        .prose a:hover { color: #d42446; }
        .prose blockquote {
            border-left: 4px solid #fe2c55;
            background: rgba(254, 44, 85, 0.05);
            color: #555;
            margin: 1.5em 0;
            padding: .75em 1.25em;
            border-radius: 0 4px 4px 0;
            font-style: italic;
            font-size: 1.1em;
        }
        .prose code:not(pre code) {
            background: rgba(254, 44, 85, 0.1);
            color: #fe2c55;
            padding: 0.15em 0.45em;
            border-radius: 4px;
            font-size: .97em;
        }
        .prose pre {
            background: #f5f5f5;
            border: 1px solid #e5e5e5;
            border-radius: 4px;
            font-size: 1em;
            padding: 1.1em 1.3em;
            overflow-x: auto;
            margin: 1.25em 0;
            color: #333;
        }
        .prose table {
            border-collapse: separate;
            border-spacing: 0;
            width: 100%;
            margin: 1.5em 0;
            background: #fff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
        }
        .prose table th, .prose table td {
            border: 1px solid #e5e5e5;
            padding: 0.5em 1em;
        }
        .prose table th {
            background: rgba(254, 44, 85, 0.1);
            color: #fe2c55;
            font-weight: 600;
        }
        .prose mark {
            background: rgba(254, 44, 85, 0.2);
            border-radius: 4px;
            padding: .1em .35em;
            color: #333;
        }
        .prose ul, .prose ol {
            margin: 1.1em 0 1.1em 1.5em;
        }
        .prose li {
            margin-bottom: .45em;
        }
        .prose img {
            max-width: 100%;
            border-radius: 4px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            margin: 1.2em 0;
        }
        .prose hr {
            border: none;
            border-top: 1px solid #e5e5e5;
            margin: 2em 0;
        }
    `,
    'notebook': `
        .prose {
            color: #333;
            font-family: 'Comic Sans MS', 'Chalkboard SE', sans-serif;
            background: #fff;
            background-image:
                linear-gradient(90deg, transparent 29px, #aaa 30px, transparent 31px),
                linear-gradient(#eee 0.1em, transparent 0.1em);
            background-size: 100% 1.5em;
            padding: 2rem 2rem 2rem 4rem;
            margin: 0;
            border-left: 2px solid #aaa;
            border-right: 2px solid #aaa;
            position: relative;
        }
        .prose::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 20px;
            background-image: radial-gradient(circle, #666 4px, transparent 5px);
            background-size: 30px 20px;
            background-position: 15px 0;
        }
        .prose h1, .prose h2, .prose h3 {
            font-weight: 700;
            color: #333;
            letter-spacing: .01em;
            margin-top: 1.6em;
            margin-bottom: .5em;
        }
        .prose h1 { font-size: 2.2em; text-decoration: underline; }
        .prose h2 { font-size: 1.5em; text-decoration: underline; }
        .prose h3 { font-size: 1.17em; text-decoration: underline; }
        .prose a {
            color: #2563eb;
            text-decoration: underline;
            transition: color .2s;
        }
        .prose a:hover { color: #7B61FF; }
        .prose blockquote {
            border-left: 4px solid #7B61FF;
            background: rgba(123, 97, 255, 0.05);
            color: #555;
            margin: 1.5em 0;
            padding: .75em 1.25em;
            border-radius: 0 4px 4px 0;
            font-style: italic;
            font-size: 1.1em;
        }
        .prose code:not(pre code) {
            background: rgba(22, 93, 255, 0.1);
            color: #165DFF;
            padding: 0.15em 0.45em;
            border-radius: .3em;
            font-size: .97em;
        }
        .prose pre {
            background: rgba(22, 93, 255, 0.05);
            border: 1px solid rgba(22, 93, 255, 0.2);
            border-radius: .6em;
            font-size: 1em;
            padding: 1.1em 1.3em;
            overflow-x: auto;
            margin: 1.25em 0;
        }
        .prose table {
            border-collapse: separate;
            border-spacing: 0;
            width: 100%;
            margin: 1.5em 0;
            background: #fff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
        }
        .prose table th, .prose table td {
            border: 1px solid #ddd;
            padding: 0.5em 1em;
        }
        .prose table th {
            background: rgba(22, 93, 255, 0.1);
            color: #165DFF;
            font-weight: 600;
        }
        .prose mark {
            background: rgba(255, 255, 0, 0.3);
            border-radius: .3em;
            padding: .1em .35em;
            color: #333;
        }
        .prose ul, .prose ol {
            margin: 1.1em 0 1.1em 1.5em;
        }
        .prose li {
            margin-bottom: .45em;
        }
        .prose img {
            max-width: 100%;
            border-radius: .7em;
            box-shadow: 0 1.5px 10px rgba(0, 0, 0, 0.1);
            margin: 1.2em 0;
        }
        .prose hr {
            border: none;
            border-top: 2px dashed #aaa;
            margin: 2em 0;
        }
    `,
    'vintage-typewriter': `
    .prose {
        color: #333;
        font-family: 'Courier New', monospace;
        background: #f5f0e1;
        background-image: linear-gradient(to bottom, #f5f0e1 0%, #e6d9c3 100%);
        border-radius: 4px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        padding: 2rem;
        margin: 0;
        position: relative;
    }
    .prose::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: #333;
        opacity: 0.2;
    }
    .prose h1, .prose h2, .prose h3 {
        font-family: 'Courier New', monospace;
        font-weight: 700;
        color: #333;
        letter-spacing: .1em;
        margin-top: 1.6em;
        margin-bottom: .5em;
    }
    .prose h1 { font-size: 1.8em; border-bottom: 2px solid #333; padding-bottom:.2em;}
    .prose h2 { font-size: 1.3em; border-bottom: 1px solid #333; padding-bottom:.1em;}
    .prose h3 { font-size: 1.1em; }
    .prose a {
        color: #5d4037;
        text-decoration: underline;
        transition: color .2s;
    }
    .prose a:hover { color: #3e2723; }
    .prose blockquote {
        border-left: 4px solid #5d4037;
        background: rgba(93, 64, 55, 0.05);
        color: #5d4037;
        margin: 1.5em 0;
        padding: .75em 1.25em;
        border-radius: 0 4px 4px 0;
        font-style: italic;
        font-size: 1.1em;
    }
    .prose code:not(pre code) {
        background: rgba(93, 64, 55, 0.1);
        color: #5d4037;
        padding: 0.15em 0.45em;
        border-radius: 0;
        font-size: .97em;
    }
    .prose pre {
        background: rgba(255, 255, 255, 0.5);
        border: 1px solid #333;
        border-radius: 0;
        font-size: 1em;
        padding: 1.1em 1.3em;
        overflow-x: auto;
        margin: 1.25em 0;
        font-family: 'Courier New', monospace;
    }
    .prose table {
        border-collapse: collapse;
        width: 100%;
        margin: 1.5em 0;
        background: rgba(255, 255, 255, 0.7);
    }
    .prose table th, .prose table td {
        border: 1px solid #333;
        padding: 0.5em 1em;
    }
    .prose table th {
        background: rgba(93, 64, 55, 0.1);
        color: #5d4037;
        font-weight: 600;
    }
    .prose mark {
        background: rgba(255, 214, 10, 0.3);
        border-radius: 0;
        padding: .1em .35em;
        color: #333;
    }
    .prose ul, .prose ol {
        margin: 1.1em 0 1.1em 1.5em;
    }
    .prose li {
        margin-bottom: .45em;
    }
    .prose img {
        max-width: 100%;
        border-radius: 0;
        box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
        margin: 1.2em 0;
        filter: sepia(20%);
    }
    .prose hr {
        border: none;
        border-top: 2px dashed #333;
        margin: 2em 0;
    }
`,
    'watercolor-art': `
    .prose {
        color: #333;
        font-family: 'Playfair Display', serif;
        background: #f8f8f8;
        background-image:
            radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.8) 0%, transparent 20%),
            radial-gradient(circle at 90% 80%, rgba(240, 240, 240, 0.8) 0%, transparent 20%);
        border-radius: 8px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        padding: 2rem;
        margin: 0;
        position: relative;
    }
    .prose::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #84fab0, #8fd3f4, #a1c4fd);
    }
    .prose h1, .prose h2, .prose h3 {
        font-family: 'Playfair Display', serif;
        font-weight: 700;
        letter-spacing: .01em;
        margin-top: 1.6em;
        margin-bottom: .5em;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }
    .prose h1 {
        font-size: 2.2em;
        background-image: linear-gradient(90deg, #84fab0, #8fd3f4);
    }
    .prose h2 {
        font-size: 1.5em;
        background-image: linear-gradient(90deg, #74ebd5, #9face6);
    }
    .prose h3 {
        font-size: 1.17em;
        background-image: linear-gradient(90deg, #a1c4fd, #c2e9fb);
    }
    .prose a {
        color: #84fab0;
        text-decoration: none;
        background-image: linear-gradient(90deg, #84fab0, #8fd3f4);
        background-size: 0% 2px;
        background-position: 0% 100%;
        background-repeat: no-repeat;
        transition: background-size .3s;
    }
    .prose a:hover {
        background-size: 100% 2px;
    }
    .prose blockquote {
        border-left: 4px solid #84fab0;
        background: rgba(132, 250, 176, 0.1);
        color: #555;
        margin: 1.5em 0;
        padding: .75em 1.25em;
        border-radius: 0 4px 4px 0;
        font-style: italic;
        font-size: 1.1em;
    }
    .prose code:not(pre code) {
        background: rgba(132, 250, 176, 0.2);
        color: #4a9c69;
        padding: 0.15em 0.45em;
        border-radius: 4px;
        font-size: .97em;
    }
    .prose pre {
        background: rgba(255, 255, 255, 0.7);
        border: 1px solid rgba(200, 200, 200, 0.5);
        border-radius: 6px;
        font-size: 1em;
        padding: 1.1em 1.3em;
        overflow-x: auto;
        margin: 1.25em 0;
        color: #333;
    }
    .prose table {
        border-collapse: separate;
        border-spacing: 0;
        width: 100%;
        margin: 1.5em 0;
        background: rgba(255, 255, 255, 0.7);
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    }
    .prose table th, .prose table td {
        border: 1px solid rgba(200, 200, 200, 0.5);
        padding: 0.5em 1em;
    }
    .prose table th {
        background: rgba(132, 250, 176, 0.2);
        color: #4a9c69;
        font-weight: 600;
    }
    .prose mark {
        background: linear-gradient(90deg, rgba(255, 214, 10, 0.2), rgba(255, 190, 10, 0.3));
        border-radius: 4px;
        padding: .1em .35em;
        color: #333;
    }
    .prose ul, .prose ol {
        margin: 1.1em 0 1.1em 1.5em;
    }
    .prose li {
        margin-bottom: .45em;
    }
    .prose img {
        max-width: 100%;
        border-radius: 6px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        margin: 1.2em 0;
        filter: blur(0.5px) brightness(1.05);
        opacity: 0.95;
    }
    .prose hr {
        border: none;
        border-top: 2px solid rgba(200, 200, 200, 0.5);
        margin: 2em 0;
    }
`,
    'children-fairy': `
    .prose {
        color: #333;
        font-family: 'Comic Sans MS', 'Chalkboard SE', sans-serif;
        background: #f0f8ff;
        background-image:
            radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.8) 0%, transparent 20%),
            radial-gradient(circle at 90% 80%, rgba(255, 255, 255, 0.8) 0%, transparent 20%);
        border-radius: 16px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        padding: 2rem;
        margin: 0;
        position: relative;
        overflow: hidden;
    }
    .prose::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 6px;
        background: linear-gradient(90deg, #ff6b6b, #ff8e8e, #ffb5b5);
    }
    .prose::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 6px;
        background: linear-gradient(90deg, #ffb5b5, #ff8e8e, #ff6b6b);
    }
    .prose h1, .prose h2, .prose h3 {
        font-family: 'Comic Sans MS', 'Chalkboard SE', sans-serif;
        font-weight: 700;
        letter-spacing: .03em;
        margin-top: 1.6em;
        margin-bottom: .5em;
        color: #333;
    }
    .prose h1 {
        font-size: 2.2em;
        color: #ff6b6b;
        text-shadow: 2px 2px 0 rgba(255, 255, 255, 0.7);
    }
    .prose h2 {
        font-size: 1.5em;
        color: #4ecdc4;
        text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.7);
    }
    .prose h3 {
        font-size: 1.17em;
        color: #ffd166;
        text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.7);
    }
    .prose a {
        color: #4ecdc4;
        text-decoration: none;
        border-bottom: 2px dotted #4ecdc4;
        transition: all .2s;
    }
    .prose a:hover {
        color: #1a936f;
        border-bottom-style: solid;
    }
    .prose blockquote {
        border-left: 4px solid #ffd166;
        background: rgba(255, 209, 102, 0.1);
        color: #555;
        margin: 1.5em 0;
        padding: .75em 1.25em;
        border-radius: 0 8px 8px 0;
        font-style: italic;
        font-size: 1.1em;
        position: relative;
    }
    .prose blockquote::before {
        content: '“';
        font-family: 'Georgia', serif;
        font-size: 3em;
        color: #ffd166;
        position: absolute;
        left: 0.2em;
        top: 0.2em;
        opacity: 0.3;
    }
    .prose code:not(pre code) {
        background: rgba(255, 107, 107, 0.1);
        color: #ff6b6b;
        padding: 0.15em 0.45em;
        border-radius: 4px;
        font-size: .97em;
    }
    .prose pre {
        background: rgba(255, 255, 255, 0.8);
        border: 2px dashed rgba(255, 107, 107, 0.3);
        border-radius: 10px;
        font-size: 1em;
        padding: 1.1em 1.3em;
        overflow-x: auto;
        margin: 1.25em 0;
        color: #333;
        position: relative;
    }
    .prose pre::before {
        content: '💻 Code';
        display: block;
        margin-bottom: 0.5em;
        color: #ff6b6b;
        font-weight: bold;
    }
    .prose table {
        border-collapse: separate;
        border-spacing: 0;
        width: 100%;
        margin: 1.5em 0;
        background: rgba(255, 255, 255, 0.9);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        border-radius: 8px;
        overflow: hidden;
    }
    .prose table th, .prose table td {
        border: 1px solid rgba(200, 200, 200, 0.3);
        padding: 0.7em 1em;
    }
    .prose table th {
        background: rgba(78, 205, 196, 0.2);
        color: #1a936f;
        font-weight: 600;
    }
    .prose mark {
        background: rgba(255, 209, 102, 0.4);
        border-radius: 4px;
        padding: .1em .35em;
        color: #333;
    }
    .prose ul, .prose ol {
        margin: 1.1em 0 1.1em 1.5em;
    }
    .prose ul li {
        list-style-type: '✨ ';
        padding-left: 0.3em;
    }
    .prose ol li {
        list-style-type: none;
        counter-increment: my-counter;
        position: relative;
        padding-left: 2em;
    }
    .prose ol li::before {
        content: counter(my-counter) '. ';
        color: #ff6b6b;
        font-weight: bold;
        position: absolute;
        left: 0;
    }
    .prose li {
        margin-bottom: .7em;
    }
    .prose img {
        max-width: 100%;
        border-radius: 12px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
        margin: 1.5em 0;
        border: 3px solid rgba(255, 255, 255, 0.8);
        transition: transform .3s;
    }
    .prose img:hover {
        transform: scale(1.02);
    }
    .prose hr {
        border: none;
        height: 2px;
        background: linear-gradient(90deg, transparent, #ffd166, transparent);
        margin: 2.5em 0;
    }
`,
    'business-brief': `
    .prose {
        color: #333;
        font-family: 'Helvetica Neue', Arial, sans-serif;
        background: #ffffff;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        padding: 2rem;
        margin: 0;
        position: relative;
    }
    .prose::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: #165DFF;
    }
    .prose h1, .prose h2, .prose h3 {
        font-family: 'Helvetica Neue', Arial, sans-serif;
        font-weight: 600;
        color: #222;
        letter-spacing: .02em;
        margin-top: 1.6em;
        margin-bottom: .5em;
    }
    .prose h1 { font-size: 1.8em; }
    .prose h2 { font-size: 1.4em; }
    .prose h3 { font-size: 1.1em; }
    .prose a {
        color: #165DFF;
        text-decoration: none;
        border-bottom: 1px solid #165DFF;
        transition: all .2s;
    }
    .prose a:hover {
        color: #0E42B3;
        border-bottom-color: #0E42B3;
    }
    .prose blockquote {
        border-left: 3px solid #165DFF;
        background: rgba(22, 93, 255, 0.03);
        color: #555;
        margin: 1.5em 0;
        padding: .75em 1.25em;
        border-radius: 0 4px 4px 0;
        font-size: 1.1em;
    }
    .prose code:not(pre code) {
        background: rgba(22, 93, 255, 0.07);
        color: #165DFF;
        padding: 0.15em 0.45em;
        border-radius: 4px;
        font-size: .97em;
    }
    .prose pre {
        background: #f7f7f7;
        border: 1px solid #e0e0e0;
        border-radius: 6px;
        font-size: 1em;
        padding: 1.1em 1.3em;
        overflow-x: auto;
        margin: 1.25em 0;
        color: #333;
    }
    .prose table {
        border-collapse: collapse;
        width: 100%;
        margin: 1.5em 0;
        background: #ffffff;
    }
    .prose table th, .prose table td {
        border: 1px solid #e0e0e0;
        padding: 0.7em 1em;
    }
    .prose table th {
        background: #f5f7fa;
        color: #222;
        font-weight: 600;
    }
    .prose mark {
        background: rgba(255, 214, 10, 0.3);
        border-radius: 4px;
        padding: .1em .35em;
        color: #333;
    }
    .prose ul, .prose ol {
        margin: 1.1em 0 1.1em 1.5em;
    }
    .prose li {
        margin-bottom: .5em;
    }
    .prose img {
        max-width: 100%;
        border-radius: 4px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
        margin: 1.2em 0;
    }
    .prose hr {
        border: none;
        border-top: 1px solid #e0e0e0;
        margin: 2em 0;
    }
`,
    'japanese-magazine': `
    .prose {
        color: #333;
        font-family: 'Hiragino Sans', 'Noto Sans JP', sans-serif;
        background: #f9f9f9;
        background-image:
            linear-gradient(90deg, rgba(240, 240, 240, 0.5) 50%, transparent 50%),
            linear-gradient(rgba(240, 240, 240, 0.5) 50%, transparent 50%);
        background-size: 20px 20px;
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        padding: 2rem;
        margin: 0;
        position: relative;
    }
    .prose::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: #e63946;
    }
    .prose h1, .prose h2, .prose h3 {
        font-family: 'Hiragino Sans', 'Noto Sans JP', sans-serif;
        font-weight: 600;
        color: #333;
        letter-spacing: .02em;
        margin-top: 1.6em;
        margin-bottom: .5em;
    }
    .prose h1 {
        font-size: 1.8em;
        border-left: 4px solid #e63946;
        padding-left: 0.5em;
    }
    .prose h2 {
        font-size: 1.4em;
        border-bottom: 1px solid #e63946;
        padding-bottom: 0.2em;
    }
    .prose h3 {
        font-size: 1.1em;
        color: #e63946;
    }
    .prose a {
        color: #e63946;
        text-decoration: none;
        transition: all .2s;
        position: relative;
    }
    .prose a::after {
        content: '';
        position: absolute;
        width: 0;
        height: 1px;
        bottom: -1px;
        left: 0;
        background-color: #e63946;
        transition: width .3s;
    }
    .prose a:hover::after {
        width: 100%;
    }
    .prose blockquote {
        border-left: 4px solid #a8dadc;
        background: rgba(168, 218, 220, 0.1);
        color: #555;
        margin: 1.5em 0;
        padding: .75em 1.25em;
        border-radius: 0 4px 4px 0;
        font-size: 1.1em;
    }
    .prose code:not(pre code) {
        background: rgba(230, 57, 70, 0.07);
        color: #e63946;
        padding: 0.15em 0.45em;
        border-radius: 4px;
        font-size: .97em;
    }
    .prose pre {
        background: #f0f0f0;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 1em;
        padding: 1.1em 1.3em;
        overflow-x: auto;
        margin: 1.25em 0;
        color: #333;
    }
    .prose table {
        border-collapse: collapse;
        width: 100%;
        margin: 1.5em 0;
        background: #ffffff;
    }
    .prose table th, .prose table td {
        border: 1px solid #ddd;
        padding: 0.7em 1em;
    }
    .prose table th {
        background: #f5f5f5;
        color: #333;
        font-weight: 600;
    }
    .prose mark {
        background: rgba(255, 214, 10, 0.3);
        border-radius: 4px;
        padding: .1em .35em;
        color: #333;
    }
    .prose ul, .prose ol {
        margin: 1.1em 0 1.1em 1.5em;
    }
    .prose li {
        margin-bottom: .5em;
    }
    .prose img {
        max-width: 100%;
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        margin: 1.2em 0;
        transition: transform .3s;
    }
    .prose img:hover {
        transform: scale(1.02);
    }
    .prose hr {
        border: none;
        border-top: 1px dashed #ddd;
        margin: 2em 0;
    }
`,
    'minimal-black-white': `
    .prose {
        color: #333;
        font-family: 'Inter', sans-serif;
        background: #ffffff;
        border-radius: 4px;
        padding: 2rem;
        margin: 0;
        position: relative;
    }
    .prose::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: #000;
    }
    .prose h1, .prose h2, .prose h3 {
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        color: #000;
        letter-spacing: .02em;
        margin-top: 1.6em;
        margin-bottom: .5em;
    }
    .prose h1 { font-size: 2em; }
    .prose h2 { font-size: 1.5em; }
    .prose h3 { font-size: 1.2em; }
    .prose a {
        color: #000;
        text-decoration: none;
        border-bottom: 1px solid #000;
        transition: all .2s;
    }
    .prose a:hover {
        background: #000;
        color: #fff;
    }
    .prose blockquote {
        border-left: 3px solid #000;
        background: rgba(0, 0, 0, 0.03);
        color: #333;
        margin: 1.5em 0;
        padding: .75em 1.25em;
        border-radius: 0 4px 4px 0;
        font-size: 1.1em;
    }
    .prose code:not(pre code) {
        background: rgba(0, 0, 0, 0.07);
        color: #000;
        padding: 0.15em 0.45em;
        border-radius: 4px;
        font-size: .97em;
    }
    .prose pre {
        background: #f5f5f5;
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        font-size: 1em;
        padding: 1.1em 1.3em;
        overflow-x: auto;
        margin: 1.25em 0;
        color: #000;
    }
    .prose table {
        border-collapse: collapse;
        width: 100%;
        margin: 1.5em 0;
        background: #ffffff;
    }
    .prose table th, .prose table td {
        border: 1px solid #e0e0e0;
        padding: 0.7em 1em;
    }
    .prose table th {
        background: #f5f5f5;
        color: #000;
        font-weight: 600;
    }
    .prose mark {
        background: rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        padding: .1em .35em;
        color: #000;
    }
    .prose ul, .prose ol {
        margin: 1.1em 0 1.1em 1.5em;
    }
    .prose li {
        margin-bottom: .5em;
    }
    .prose img {
        max-width: 100%;
        border-radius: 4px;
        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
        margin: 1.2em 0;
    }
    .prose hr {
        border: none;
        border-top: 1px solid #e0e0e0;
        margin: 2em 0;
    }
`,
    'cyberpunk': `
    .prose {
        color: #fff;
        font-family: 'Rajdhani', sans-serif;
        background: #121212;
        background-image:
            radial-gradient(circle at 20% 20%, rgba(255, 0, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(0, 255, 255, 0.05) 0%, transparent 50%);
        border-radius: 8px;
        padding: 2rem;
        margin: 0;
        position: relative;
        overflow: hidden;
    }
    .prose::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #ff00ff, #00ffff);
    }
    .prose::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #00ffff, #ff00ff);
    }
    .prose h1, .prose h2, .prose h3 {
        font-family: 'Rajdhani', sans-serif;
        font-weight: 700;
        letter-spacing: .05em;
        margin-top: 1.6em;
        margin-bottom: .5em;
        text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
    }
    .prose h1 {
        font-size: 2.2em;
        color: #ff00ff;
        text-shadow: 0 0 10px rgba(255, 0, 255, 0.5);
    }
    .prose h2 {
        font-size: 1.5em;
        color: #00ffff;
        text-shadow: 0 0 8px rgba(0, 255, 255, 0.5);
    }
    .prose h3 {
        font-size: 1.17em;
        color: #ffcc00;
        text-shadow: 0 0 6px rgba(255, 204, 0, 0.5);
    }
    .prose a {
        color: #00ffff;
        text-decoration: none;
        position: relative;
        transition: all .2s;
    }
    .prose a::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: -2px;
        left: 0;
        background-color: #00ffff;
        box-shadow: 0 0 5px rgba(0, 255, 255, 0.5);
    }
    .prose a:hover {
        color: #ff00ff;
    }
    .prose a:hover::after {
        background-color: #ff00ff;
        box-shadow: 0 0 5px rgba(255, 0, 255, 0.5);
    }
    .prose blockquote {
        border-left: 4px solid #ffcc00;
        background: rgba(255, 204, 0, 0.05);
        color: #fff;
        margin: 1.5em 0;
        padding: .75em 1.25em;
        border-radius: 0 4px 4px 0;
        font-style: italic;
        font-size: 1.1em;
        box-shadow: 0 0 10px rgba(255, 204, 0, 0.1);
    }
    .prose code:not(pre code) {
        background: rgba(255, 0, 255, 0.1);
        color: #ff00ff;
        padding: 0.15em 0.45em;
        border-radius: 4px;
        font-size: .97em;
        border: 1px solid rgba(255, 0, 255, 0.2);
    }
    .prose pre {
        background: rgba(0, 0, 0, 0.5);
        border: 1px solid rgba(0, 255, 255, 0.2);
        border-radius: 6px;
        font-size: 1em;
        padding: 1.1em 1.3em;
        overflow-x: auto;
        margin: 1.25em 0;
        color: #00ffff;
        box-shadow: 0 0 10px rgba(0, 255, 255, 0.1);
        position: relative;
    }
    .prose pre::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 3px;
        background: linear-gradient(0deg, #ff00ff, #00ffff);
    }
    .prose table {
        border-collapse: separate;
        border-spacing: 0;
        width: 100%;
        margin: 1.5em 0;
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 6px;
        overflow: hidden;
    }
    .prose table th, .prose table td {
        border: 1px solid rgba(255, 255, 255, 0.1);
        padding: 0.7em 1em;
    }
    .prose table th {
        background: rgba(255, 0, 255, 0.1);
        color: #ff00ff;
        font-weight: 600;
    }
    .prose mark {
        background: rgba(255, 204, 0, 0.3);
        border-radius: 4px;
        padding: .1em .35em;
        color: #fff;
    }
    .prose ul, .prose ol {
        margin: 1.1em 0 1.1em 1.5em;
    }
    .prose ul li {
        list-style-type: '• ';
        color: #00ffff;
    }
    .prose ul li span {
        color: #fff;
    }
    .prose ol li {
        list-style-type: none;
        counter-increment: my-counter;
        position: relative;
        padding-left: 1.5em;
    }
    .prose ol li::before {
        content: counter(my-counter) '. ';
        color: #ff00ff;
        font-weight: bold;
        position: absolute;
        left: 0;
    }
    .prose li {
        margin-bottom: .7em;
    }
    .prose img {
        max-width: 100%;
        border-radius: 4px;
        box-shadow: 0 0 15px rgba(0, 255, 255, 0.2);
        margin: 1.2em 0;
        border: 1px solid rgba(255, 255, 255, 0.1);
        filter: brightness(1.1) contrast(1.2);
    }
    .prose hr {
        border: none;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        margin: 2em 0;
    }
`,
    'tech-blog': `
    .prose {
        color: #333;
        font-family: 'Roboto', sans-serif;
        background: #f9fafc;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        padding: 2rem;
        margin: 0;
        position: relative;
    }
    .prose::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: #2563eb;
    }
    .prose h1, .prose h2, .prose h3 {
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        color: #1e293b;
        letter-spacing: .02em;
        margin-top: 1.6em;
        margin-bottom: .5em;
    }
    .prose h1 { font-size: 2em; }
    .prose h2 { font-size: 1.5em; }
    .prose h3 { font-size: 1.2em; }
    .prose a {
        color: #2563eb;
        text-decoration: none;
        font-weight: 500;
        transition: all .2s;
    }
    .prose a:hover {
        color: #1d4ed8;
        text-decoration: underline;
    }
    .prose blockquote {
        border-left: 4px solid #2563eb;
        background: rgba(37, 99, 235, 0.05);
        color: #475569;
        margin: 1.5em 0;
        padding: .75em 1.25em;
        border-radius: 0 4px 4px 0;
        font-size: 1.1em;
    }
    .prose code:not(pre code) {
        background: rgba(37, 99, 235, 0.07);
        color: #2563eb;
        padding: 0.15em 0.45em;
        border-radius: 4px;
        font-size: .97em;
    }
    .prose pre {
        background: #1e293b;
        border-radius: 6px;
        font-size: 1em;
        padding: 1.1em 1.3em;
        overflow-x: auto;
        margin: 1.25em 0;
        color: #e2e8f0;
        position: relative;
    }
    .prose pre::before {
        content: 'code';
        position: absolute;
        top: 0.5em;
        right: 0.5em;
        color: #94a3b8;
        font-size: 0.8em;
    }
    .prose table {
        border-collapse: collapse;
        width: 100%;
        margin: 1.5em 0;
        background: #ffffff;
        border-radius: 6px;
        overflow: hidden;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
    }
    .prose table th, .prose table td {
        border: 1px solid #e2e8f0;
        padding: 0.7em 1em;
    }
    .prose table th {
        background: #f1f5f9;
        color: #1e293b;
        font-weight: 600;
    }
    .prose mark {
        background: rgba(255, 214, 10, 0.3);
        border-radius: 4px;
        padding: .1em .35em;
        color: #333;
    }
    .prose ul, .prose ol {
        margin: 1.1em 0 1.1em 1.5em;
    }
    .prose li {
        margin-bottom: .5em;
    }
    .prose img {
        max-width: 100%;
        border-radius: 6px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        margin: 1.2em 0;
    }
    .prose hr {
        border: none;
        border-top: 1px solid #e2e8f0;
        margin: 2em 0;
    }
`
};
