-- Fix infinite recursion in admin_users RLS policies
-- Drop existing problematic policies
DROP POLICY IF EXISTS "Admins can manage admin users" ON public.admin_users;
DROP POLICY IF EXISTS "Admins can view admin users" ON public.admin_users;

-- Create a security definer function to check admin status
CREATE OR REPLACE FUNCTION public.is_admin(user_uuid uuid DEFAULT auth.uid())
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
STABLE
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.admin_users
    WHERE user_id = user_uuid
  );
$$;

-- Create new RLS policies using the security definer function
CREATE POLICY "Only admins can view admin users"
  ON public.admin_users
  FOR SELECT
  USING (public.is_admin());

CREATE POLICY "Only admins can manage admin users"
  ON public.admin_users
  FOR ALL
  USING (public.is_admin())
  WITH CHECK (public.is_admin());