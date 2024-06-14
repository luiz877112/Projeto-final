import { createClient } from "@supabase/supabase-js"

const link = "https://otaszvqpamxefamtsugf.supabase.co"
const password = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90YXN6dnFwYW14ZWZhbXRzdWdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzMTU2MDgsImV4cCI6MjAzMzg5MTYwOH0.HImekrUG6kGlnUB4AcYwQgrYIKYqRnewYbcS7e16pEY"

export const supabase = createClient(link, password);