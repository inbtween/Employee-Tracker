const addEmployee = () => {
  // is this correct below?
  inquirer.prompt().then((res) => {
    switch (res.title) {
      case "Designer":
        addDesigner();
        break;
      case "Animator":
        addAnimator();
        break;
      case "Art Director":
        addArtDirector();
        break;
      case "Creative Director":
        addCreativeDirector();
        break;
      case "Producer":
        addProducer();
        break;
      case "Executive Producer":
        addExecutiveProducer();
        break;
      // default:
      //   buildTeam();
    }
  });
  // is this correct?
  inquirer.prompt().then((res) => {
    switch (res.name) {
      case "Art Dept":
        addArtDepartment();
        break;
      case "Creative Services":
        addCreativeServices();
        break;
      case "On-Air Design":
        addOnAirDesign();
        break;
      case "Off-Air Design":
        addOffAirDesign();
        break;
      default:
        console.table(res);
    }
  });
};
