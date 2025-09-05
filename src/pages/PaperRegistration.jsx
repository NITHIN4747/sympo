import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen } from 'lucide-react'

const PaperRegistration = () => {
  const formUrl = import.meta.env.VITE_GOOGLE_FORM_PAPER || 'https://forms.gle/YOUR_FORM_ID'

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Paper Presentation Registration</h1>
          <p className="text-muted-foreground">All registrations are handled via the official Google Form.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Paper Presentation</CardTitle>
              <CardDescription>Click the button below to open the official Google Form.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm">Last date for Registration: <strong>03.10.2025</strong></p>
                <div className="text-center">
                  <a href={formUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded">
                    <BookOpen className="mr-2" /> Open Google Form
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

  {/* No dialogs — registration is a simple external link to the Google Form */}
    </div>
  )
}

export default PaperRegistration