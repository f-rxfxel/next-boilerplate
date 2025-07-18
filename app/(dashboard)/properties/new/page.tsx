"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { useToast } from "@/hooks/use-toast"
import { ArrowLeft, Upload, X } from "lucide-react"
import Link from "next/link"

export default function NewPropertyPage() {
  const { toast } = useToast()
  const [photos, setPhotos] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Property Added",
      description: "Your property has been successfully added to the listings.",
    })
  }

  const addPhoto = () => {
    setPhotos([...photos, `/placeholder.svg?height=200&width=300&text=Photo${photos.length + 1}`])
  }

  const removePhoto = (index: number) => {
    setPhotos(photos.filter((_, i) => i !== index))
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center gap-2 px-6 py-4 border-b">
        <SidebarTrigger />
        <Button variant="ghost" size="sm" asChild>
          <Link href="/properties">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Properties
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Add New Property</h1>
      </header>

      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="title">Property Title *</Label>
                    <Input id="title" placeholder="e.g., Modern Downtown Apartment" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price">Price *</Label>
                    <Input id="price" type="number" placeholder="450000" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the property features, amenities, and highlights..."
                    rows={4}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address *</Label>
                  <Input id="address" placeholder="123 Main Street, City, State, ZIP" required />
                </div>
              </CardContent>
            </Card>

            {/* Property Details */}
            <Card>
              <CardHeader>
                <CardTitle>Property Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <div className="space-y-2">
                    <Label htmlFor="type">Property Type *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="apartment">Apartment</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="townhouse">Townhouse</SelectItem>
                        <SelectItem value="villa">Villa</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bedrooms">Bedrooms *</Label>
                    <Input id="bedrooms" type="number" min="0" placeholder="2" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bathrooms">Bathrooms *</Label>
                    <Input id="bathrooms" type="number" min="0" step="0.5" placeholder="2" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="area">Area (m²) *</Label>
                    <Input id="area" type="number" min="0" placeholder="85" required />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Photos */}
            <Card>
              <CardHeader>
                <CardTitle>Photos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                  {photos.map((photo, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={photo || "/placeholder.svg"}
                        alt={`Property photo ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg border"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removePhoto(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    className="h-32 border-dashed bg-transparent"
                    onClick={addPhoto}
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    Add Photo
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Add up to 10 photos. The first photo will be used as the main image.
                </p>
              </CardContent>
            </Card>

            {/* Additional Features */}
            <Card>
              <CardHeader>
                <CardTitle>Additional Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="parking">Parking Spaces</Label>
                    <Input id="parking" type="number" min="0" placeholder="1" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="year-built">Year Built</Label>
                    <Input id="year-built" type="number" min="1800" max="2024" placeholder="2020" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amenities">Amenities</Label>
                  <Textarea id="amenities" placeholder="List amenities like pool, gym, balcony, etc." rows={3} />
                </div>
              </CardContent>
            </Card>

            {/* Submit */}
            <div className="flex gap-4 justify-end">
              <Button type="button" variant="outline" asChild>
                <Link href="/properties">Cancel</Link>
              </Button>
              <Button type="submit">Add Property</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
