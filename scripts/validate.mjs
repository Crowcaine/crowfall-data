(async () => {
  await import(`./validations/classes.mjs`);
  await import(`./validations/domains.mjs`);
  await import(`./validations/talents.mjs`);
  await import(`./validations/promotions.mjs`);
  await import(`./validations/powers.mjs`);
  await import(`./validations/majors.mjs`);
  await import(`./validations/minors.mjs`);
})();
