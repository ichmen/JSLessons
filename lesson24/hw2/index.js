const students = [
  { name: 'Sam', birthDate: '03/15/2010' },
  { name: 'Tom', birthDate: '01/15/2010' },
  { name: 'Ben', birthDate: '01/17/2008' },
];

function studentsBirthDays(students) {
  const birthList = {};
  const month = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  let sortArr = students
    .sort(
      (a, b) => new Date(a.birthDate).setFullYear(1970) - new Date(b.birthDate).setFullYear(1970),
    )
    .forEach(el => {
      console.log(el.name);
      // prettier-ignore
      const keyName = [month[new Date(el.birthDate).getMonth()]];
      if (!(keyName in birthList)) {
        birthList[keyName] = [];
      }
      birthList[keyName].push(el.name);
    });
  return birthList;
}
