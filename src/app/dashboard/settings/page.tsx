
'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Upload, User, Twitter, Facebook, Instagram, Linkedin, Bell, Mail, MessageSquare } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function SettingsPage() {
    const avatarImage = PlaceHolderImages.find(img => img.id === 'avatar-user');

  return (
    <Tabs defaultValue="profile" className="space-y-6">
      <TabsList>
        <TabsTrigger value="profile">Store Profile</TabsTrigger>
        <TabsTrigger value="social">Social Media</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <Card>
          <CardHeader>
            <CardTitle>Store Profile</CardTitle>
            <CardDescription>
              Update your store's profile information.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src={avatarImage?.imageUrl} alt="Store Logo" />
                <AvatarFallback>
                    <User className="h-10 w-10" />
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <Label htmlFor="logo">Store Logo</Label>
                <div className="relative mt-2">
                  <Input id="logo" type="file" className="hidden" />
                  <Button asChild variant="outline">
                    <label htmlFor="logo" className="cursor-pointer flex items-center gap-2">
                      <Upload className="h-4 w-4" />
                      Upload Logo
                    </label>
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    PNG, JPG, GIF up to 5MB
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="store-name">Store Name</Label>
                <Input
                  id="store-name"
                  defaultValue="chocobe"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="store-email">Email</Label>
                <Input
                  id="store-email"
                  type="email"
                  defaultValue="support@chocobe.com"
                />
              </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="store-bio">Store Bio</Label>
                <Textarea id="store-bio" defaultValue="Design Your Space, Define Your Style." />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select defaultValue="usa">
                        <SelectTrigger>
                            <SelectValue placeholder="Select country"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="usa">United States</SelectItem>
                            <SelectItem value="canada">Canada</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <Select defaultValue="en">
                        <SelectTrigger>
                            <SelectValue placeholder="Select language"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="es">Spanish</SelectItem>
                            <SelectItem value="fr">French</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button>Save</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="social">
        <Card>
          <CardHeader>
            <CardTitle>Social Media</CardTitle>
            <CardDescription>
              Connect your social media accounts to your store.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 rounded-md">
                    <Twitter className="h-6 w-6 text-blue-500" />
                </div>
              <div className="flex-1 space-y-2">
                <Label htmlFor="twitter">Twitter</Label>
                <Input
                  id="twitter"
                  defaultValue="https://twitter.com/chocobe"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-800/10 rounded-md">
                    <Facebook className="h-6 w-6 text-blue-800" />
                </div>
              <div className="flex-1 space-y-2">
                <Label htmlFor="facebook">Facebook</Label>
                <Input
                  id="facebook"
                  defaultValue="https://facebook.com/chocobe"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="p-3 bg-pink-600/10 rounded-md">
                    <Instagram className="h-6 w-6 text-pink-600" />
                </div>
              <div className="flex-1 space-y-2">
                <Label htmlFor="instagram">Instagram</Label>
                <Input
                  id="instagram"
                  defaultValue="https://instagram.com/chocobe"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-600/10 rounded-md">
                    <Linkedin className="h-6 w-6 text-blue-600" />
                </div>
              <div className="flex-1 space-y-2">
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input
                  id="linkedin"
                  defaultValue="https://linkedin.com/company/chocobe"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button>Save</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="notifications">
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Manage how you receive notifications.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start justify-between rounded-lg border p-4">
                <div className="flex items-center gap-4">
                    <Bell className="h-6 w-6 text-primary" />
                    <div>
                        <p className="font-medium">In-App Notifications</p>
                        <p className="text-sm text-muted-foreground">Receive notifications directly in the dashboard.</p>
                    </div>
                </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-start justify-between rounded-lg border p-4">
                <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-muted-foreground">Receive notifications via email for important events.</p>
                    </div>
                </div>
              <Switch defaultChecked />
            </div>
             <div className="flex items-start justify-between rounded-lg border p-4">
                <div className="flex items-center gap-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    <div>
                        <p className="font-medium">New Messages</p>
                        <p className="text-sm text-muted-foreground">Get notified when you receive a new message.</p>
                    </div>
                </div>
              <Switch />
            </div>
          </CardContent>
          <CardFooter className="border-t px-6 py-4">
            <Button>Save</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
