import { Metadata } from "next"
import ResourceBoard from "@/app/components/resource-board"

export const metadata: Metadata = {
  title: "Resources | Sendai",
  description: "Explore resources from our sponsors to help you build during the hackathon",
}

export default function ResourcesPage() {
  return <ResourceBoard />
}
