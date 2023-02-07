function calculateAge(dob) {
    const now = new Date();
    const birthDate = new Date(dob);
    let ageInMilliseconds = now - birthDate;
    let ageInSeconds = ageInMilliseconds / 1000;
    let ageInMinutes = ageInSeconds / 60;
    let ageInHours = ageInMinutes / 60;
    let ageInDays = ageInHours / 24;
    let ageInMonths = ageInDays / 30.44;
    let ageInYears = ageInMonths / 12;
  
    return {
        years: Math.floor(ageInYears),
        months: Math.floor(ageInMonths % 12),
        days: Math.floor(ageInDays % 30.44),
    };
  }
  
  console.log(calculateAge("1998-12-21"));