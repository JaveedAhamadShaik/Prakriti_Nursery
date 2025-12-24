import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";
import { useSearchParams } from "react-router-dom";
import { X, Plus } from "lucide-react";

// Placeholder images - replace with actual project images
import showcase1 from "@/assets/showcase/1.jpg";
import showcase2 from "@/assets/showcase/2.jpg";
import showcase3 from "@/assets/showcase/3.jpg";
import showcase4 from "@/assets/showcase/4.jpg";
import showcase5 from "@/assets/showcase/5.jpg";
import showcase6 from "@/assets/showcase/6.jpg";

interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  category?: 'landscaping' | 'vertical-gardening';
}

const landscapingProjects: Project[] = [
  { id: 1, image: showcase1, title: "Garden Landscaping", description: "Complete garden makeover project", category: 'landscaping' },
  { id: 2, image: showcase4, title: "Commercial Landscaping", description: "Office park landscape design", category: 'landscaping' },
  { id: 3, image: showcase5, title: "Terrace Garden", description: "Rooftop garden landscaping", category: 'landscaping' },
];

const verticalGardeningProjects: Project[] = [
  { id: 4, image: showcase2, title: "Vertical Garden Wall", description: "Beautiful living wall for commercial space", category: 'vertical-gardening' },
  { id: 5, image: showcase3, title: "Green Office Space", description: "Modern office vertical garden installation", category: 'vertical-gardening' },
  { id: 6, image: showcase6, title: "Residential Green Wall", description: "Home vertical garden with herbs", category: 'vertical-gardening' },
];

const initialCompletedProjects: Project[] = [
  { id: 7, image: showcase1, title: "Hotel Garden", description: "5-star hotel garden project", category: 'landscaping' },
  { id: 8, image: showcase3, title: "School Garden", description: "Educational institution greenery", category: 'vertical-gardening' },
  { id: 9, image: showcase5, title: "Villa Garden", description: "Luxury villa complete garden", category: 'landscaping' },
];

const WhatWeDo = () => {
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");
  const [activeTab, setActiveTab] = useState("landscaping");
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  
  // Add project dialog state
  const [addProjectDialogOpen, setAddProjectDialogOpen] = useState(false);
  const [newProject, setNewProject] = useState({ title: "", description: "", category: "landscaping" as 'landscaping' | 'vertical-gardening' });
  const [completedProjects, setCompletedProjects] = useState<Project[]>(initialCompletedProjects);

  useEffect(() => {
    if (tabParam === "landscaping" || tabParam === "vertical-gardening" || tabParam === "completed") {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleGetQuote = (project: Project) => {
    setSelectedProject(project);
    setQuoteDialogOpen(true);
  };

  const handleImageClick = (image: string) => {
    setLightboxImage(image);
  };

  const handleSubmitQuote = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      toast({ title: "Error", description: "Please fill all required fields", variant: "destructive" });
      return;
    }
    toast({ title: "Quote Request Sent!", description: "We'll get back to you within 24 hours" });
    setQuoteDialogOpen(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleAddProject = () => {
    if (!newProject.title) {
      toast({ title: "Error", description: "Please enter a project name", variant: "destructive" });
      return;
    }
    
    const project: Project = {
      id: Date.now(),
      image: newProject.category === 'landscaping' ? showcase4 : showcase2,
      title: newProject.title,
      description: newProject.description || "New project",
      category: newProject.category,
    };
    
    setCompletedProjects([...completedProjects, project]);
    setAddProjectDialogOpen(false);
    setNewProject({ title: "", description: "", category: "landscaping" });
    toast({ title: "Project Added!", description: "Your project has been added successfully" });
  };

  const ProjectCard = ({ project }: { project: Project }) => (
    <Card className="overflow-hidden group">
      <div className="relative cursor-pointer" onClick={() => handleImageClick(project.image)}>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform group-hover:scale-105" 
        />
      </div>
      <CardContent className="p-3 sm:p-4">
        <h3 className="font-bold text-base sm:text-lg mb-1 line-clamp-1">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{project.description}</p>
        <Button onClick={() => handleGetQuote(project)} className="w-full bg-primary hover:bg-primary/90 text-sm">
          Get Quote
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8 sm:py-12 px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">What We Do</h1>
          <p className="text-muted-foreground text-base sm:text-lg">Transforming spaces with nature's beauty</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex flex-col sm:grid sm:grid-cols-3 w-full mb-6 sm:mb-8 h-auto gap-1 sm:gap-0 bg-muted p-1 rounded-lg">
            <TabsTrigger value="landscaping" className="text-xs sm:text-sm py-2.5 sm:py-3 px-3 sm:px-4 whitespace-nowrap w-full">
              Landscaping
            </TabsTrigger>
            <TabsTrigger value="vertical-gardening" className="text-xs sm:text-sm py-2.5 sm:py-3 px-3 sm:px-4 whitespace-nowrap w-full">
              Vertical Gardening
            </TabsTrigger>
            <TabsTrigger value="completed" className="text-xs sm:text-sm py-2.5 sm:py-3 px-3 sm:px-4 whitespace-nowrap w-full">
              Completed
            </TabsTrigger>
          </TabsList>

          <TabsContent value="landscaping">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">Landscaping</h2>
              <p className="text-muted-foreground text-sm sm:text-base">Complete landscape design and garden transformation solutions</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {landscapingProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="vertical-gardening">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">Vertical Gardening</h2>
              <p className="text-muted-foreground text-sm sm:text-base">Living walls and vertical garden installations</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {verticalGardeningProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-2">What We Have Done</h2>
                <p className="text-muted-foreground text-sm sm:text-base">Browse our portfolio of completed projects</p>
              </div>
              <Button onClick={() => setAddProjectDialogOpen(true)} className="flex items-center gap-2 self-start sm:self-auto">
                <Plus className="h-4 w-4" />
                Add Project
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {completedProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Quote Dialog */}
      <Dialog open={quoteDialogOpen} onOpenChange={setQuoteDialogOpen}>
        <DialogContent className="mx-4 max-w-md">
          <DialogHeader>
            <DialogTitle>Get a Quote</DialogTitle>
            <DialogDescription>
              {selectedProject && `Interested in: ${selectedProject.title}`}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name *</Label>
              <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" />
            </div>
            <div>
              <Label htmlFor="phone">Phone *</Label>
              <Input id="phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder="Your phone number" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us about your project requirements..." />
            </div>
            <Button onClick={handleSubmitQuote} className="w-full">Submit Quote Request</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Project Dialog */}
      <Dialog open={addProjectDialogOpen} onOpenChange={setAddProjectDialogOpen}>
        <DialogContent className="mx-4 max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Project</DialogTitle>
            <DialogDescription>
              Add a new completed project to your portfolio
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="projectName">Project Name *</Label>
              <Input 
                id="projectName" 
                value={newProject.title} 
                onChange={(e) => setNewProject({ ...newProject, title: e.target.value })} 
                placeholder="Enter project name" 
              />
            </div>
            <div>
              <Label htmlFor="projectDesc">Description</Label>
              <Textarea 
                id="projectDesc" 
                value={newProject.description} 
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })} 
                placeholder="Brief description of the project" 
              />
            </div>
            <div>
              <Label>Category *</Label>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2">
                <Button 
                  type="button"
                  variant={newProject.category === 'landscaping' ? 'default' : 'outline'}
                  onClick={() => setNewProject({ ...newProject, category: 'landscaping' })}
                  className="flex-1"
                >
                  Landscaping
                </Button>
                <Button 
                  type="button"
                  variant={newProject.category === 'vertical-gardening' ? 'default' : 'outline'}
                  onClick={() => setNewProject({ ...newProject, category: 'vertical-gardening' })}
                  className="flex-1"
                >
                  Vertical Gardening
                </Button>
              </div>
            </div>
            <Button onClick={handleAddProject} className="w-full">Add Project</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Image Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setLightboxImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img 
            src={lightboxImage} 
            alt="Project" 
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default WhatWeDo;