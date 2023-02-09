import createServices from "@/services";

export default function initServices() {
  return { $services: createServices() };
}
