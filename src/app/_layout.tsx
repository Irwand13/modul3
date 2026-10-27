import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Anime Hunter " }} />
      <Stack.Screen name="search" options={{ title: "Search Characters" }} />
      <Stack.Screen name="favorite" options={{ title: "Favorites" }} />
      <Stack.Screen
        name="character/[id]"
        options={{ title: "Character Detail" }}
      />
    </Stack>
  );
}
