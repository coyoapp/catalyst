require('replace-in-file')({
  files: [
    'core/package.json',
    'angular/projects/catalyst/package.json',
    'angular/projects/catalyst-formly/package.json',
    'react/package.json'
  ],
  from: /"@haiilo\/(catalyst(?:-tokens|-angular)?)": "[^\"]*"/g,
  to: (_, lib) => `"@haiilo\/${lib}": "${process.argv[2]}"`,
}, (_, results) => results
  .filter(result => result.hasChanged)
  .forEach(result => console.log(`Updated ${result.file} to v${process.argv[2]}`))
);