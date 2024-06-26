module.exports = {
  description: 'Component Generator',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'component name',
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'src/components/{{properCase name}}/{{properCase name}}.tsx',
      templateFile: 'generators/Component.tsx.hbs',
    },
    {
      type: 'add',
      path: 'src/components/{{properCase name}}/{{properCase name}}.stories.tsx',
      templateFile: 'generators/Component.stories.tsx.hbs',
    },
    {
      type: 'add',
      path: 'src/components/{{properCase name}}/index.ts',
      templateFile: 'generators/index.ts.hbs',
    },
  ],
}
