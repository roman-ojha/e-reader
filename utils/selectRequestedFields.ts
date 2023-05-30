// export default (info) => {
//   return info.fieldNodes[0].selectionSet?.selections.map(
//     (field) => (field as any).name.value
//   );
// };

export default (info): {} => {
  const fields = info.fieldNodes[0].selectionSet?.selections.map(
    (field) => (field as any).name.value
  );
  return {
    ...fields?.reduce((acc, field) => ({ ...acc, [field]: true }), {}),
  };
};
