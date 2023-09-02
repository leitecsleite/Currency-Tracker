export default async function useFetch(url: string) {
  try {
    const response = await fetch(url, {
      cache: "force-cache",
      next: {
        revalidate: 3600,
      },
    });
     return await response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}
