import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import {
  ArrowLeft,
  Edit,
  Archive,
  Trash2,
  Eye,
  MessageSquare,
  Bed,
  Bath,
  Square,
  Car,
  Calendar,
  MapPin,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock data - in a real app, this would come from your database
const property = {
  id: 1,
  title: "Modern Downtown Apartment",
  description:
    "Beautiful 2-bedroom apartment in the heart of downtown with stunning city views. This modern unit features high-end finishes, floor-to-ceiling windows, and access to premium building amenities including a rooftop terrace, fitness center, and concierge service.",
  address: "123 Main St, Downtown, NY 10001",
  price: 450000,
  bedrooms: 2,
  bathrooms: 2,
  area: 85,
  parking: 1,
  yearBuilt: 2020,
  type: "apartment",
  status: "available",
  visits: 24,
  messages: 3,
  photos: [
    "/placeholder.svg?height=400&width=600&text=Main+Photo",
    "/placeholder.svg?height=300&width=400&text=Living+Room",
    "/placeholder.svg?height=300&width=400&text=Kitchen",
    "/placeholder.svg?height=300&width=400&text=Bedroom",
    "/placeholder.svg?height=300&width=400&text=Bathroom",
  ],
  amenities:
    "Swimming pool, Fitness center, Rooftop terrace, Concierge service, In-unit laundry, Central air conditioning, Hardwood floors, Stainless steel appliances",
  dateAdded: "2024-01-15",
}

export default function PropertyDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-6 py-4 border-b">
        <div className="flex items-center gap-2">
          <SidebarTrigger />
          <Button variant="ghost" size="sm" asChild>
            <Link href="/properties">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Properties
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Property Details</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href={`/properties/${params.id}/edit`}>
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Link>
          </Button>
          <Button variant="outline">
            <Archive className="mr-2 h-4 w-4" />
            Archive
          </Button>
          <Button variant="destructive">
            <Trash2 className="mr-2 h-4 w-4" />
            Remove
          </Button>
        </div>
      </header>

      <div className="flex-1 p-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Main Info */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    {property.address}
                  </div>
                  <div className="flex items-center gap-4">
                    <Badge
                      variant={
                        property.status === "available"
                          ? "default"
                          : property.status === "pending"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {property.status}
                    </Badge>
                    <Badge variant="outline" className="capitalize">
                      {property.type}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary mb-2">${property.price.toLocaleString()}</div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {property.visits} visits
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      {property.messages} messages
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4 bg-muted rounded-lg">
                <div className="flex items-center gap-2">
                  <Bed className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-semibold">{property.bedrooms}</div>
                    <div className="text-sm text-muted-foreground">Bedrooms</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-semibold">{property.bathrooms}</div>
                    <div className="text-sm text-muted-foreground">Bathrooms</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Square className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-semibold">{property.area}m²</div>
                    <div className="text-sm text-muted-foreground">Area</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-semibold">{property.parking}</div>
                    <div className="text-sm text-muted-foreground">Parking</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-semibold">{property.yearBuilt}</div>
                    <div className="text-sm text-muted-foreground">Built</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Photos */}
          <Card>
            <CardHeader>
              <CardTitle>Photos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="aspect-video relative overflow-hidden rounded-lg">
                  <Image
                    src={property.photos[0] || "/placeholder.svg"}
                    alt="Main property photo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {property.photos.slice(1).map((photo, index) => (
                    <div key={index} className="aspect-video relative overflow-hidden rounded-lg">
                      <Image
                        src={photo || "/placeholder.svg"}
                        alt={`Property photo ${index + 2}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Description */}
            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{property.description}</p>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card>
              <CardHeader>
                <CardTitle>Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-2">
                  {property.amenities.split(", ").map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Property Info */}
          <Card>
            <CardHeader>
              <CardTitle>Property Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Property ID</label>
                  <p className="font-semibold">#{property.id.toString().padStart(6, "0")}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Date Added</label>
                  <p className="font-semibold">{new Date(property.dateAdded).toLocaleDateString()}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Status</label>
                  <p className="font-semibold capitalize">{property.status}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Property Type</label>
                  <p className="font-semibold capitalize">{property.type}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Total Views</label>
                  <p className="font-semibold">{property.visits}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Messages</label>
                  <p className="font-semibold">{property.messages}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
