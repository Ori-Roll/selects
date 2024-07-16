export const extractDataFromForm = (e: React.FormEvent<HTMLFormElement>) => {
  const formData = new FormData(e.target); // Create a FormData object from the form
  const formValues: Record<string, FormDataEntryValue[] | string> = {};

  // Iterate over the FormData entries and add them to the formValues object
  for (const [name, value] of formData.entries()) {
    if (formValues[name] && Array.isArray(formValues[name])) {
      formValues[name].push(value);
    } else {
      formValues[name] = [value];
    }
  }

  Object.entries(formValues as Record<string, string | []>).forEach(
    ([key, value]) => {
      if (value.length && value.length === 1) {
        formValues[key] = value[0];
      }
    }
  );
  return formValues;
};
