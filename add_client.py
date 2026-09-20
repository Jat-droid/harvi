import os

dir_path = './src/components'
for filename in os.listdir(dir_path):
    if filename.endswith('.tsx') or filename.endswith('.ts'):
        filepath = os.path.join(dir_path, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        if not content.startswith('"use client";'):
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write('"use client";\n' + content)
