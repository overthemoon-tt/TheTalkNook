export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      bookings: {
        Row: {
          bkash_transaction_id: string
          chat_id: string | null
          created_at: string
          id: string
          is_anonymous: boolean
          listener_id: string | null
          meet_link: string | null
          preferred_date: string
          preferred_time: string
          reference_code: string
          session_type: string
          status: string
          user_email: string | null
          user_name: string
          user_note: string | null
          user_phone: string
        }
        Insert: {
          bkash_transaction_id: string
          chat_id?: string | null
          created_at?: string
          id?: string
          is_anonymous?: boolean
          listener_id?: string | null
          meet_link?: string | null
          preferred_date: string
          preferred_time: string
          reference_code?: string
          session_type: string
          status?: string
          user_email?: string | null
          user_name: string
          user_note?: string | null
          user_phone: string
        }
        Update: {
          bkash_transaction_id?: string
          chat_id?: string | null
          created_at?: string
          id?: string
          is_anonymous?: boolean
          listener_id?: string | null
          meet_link?: string | null
          preferred_date?: string
          preferred_time?: string
          reference_code?: string
          session_type?: string
          status?: string
          user_email?: string | null
          user_name?: string
          user_note?: string | null
          user_phone?: string
        }
        Relationships: []
      }
      chat_messages: {
        Row: {
          chat_id: string
          content: string
          created_at: string
          id: string
          sender_display_name: string
          sender_role: string
        }
        Insert: {
          chat_id: string
          content: string
          created_at?: string
          id?: string
          sender_display_name?: string
          sender_role: string
        }
        Update: {
          chat_id?: string
          content?: string
          created_at?: string
          id?: string
          sender_display_name?: string
          sender_role?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_messages_chat_id_fkey"
            columns: ["chat_id"]
            isOneToOne: false
            referencedRelation: "chat_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      chat_sessions: {
        Row: {
          booking_id: string
          created_at: string
          id: string
          listener_joined_at: string | null
          session_ended_at: string | null
          session_started_at: string | null
          status: string
        }
        Insert: {
          booking_id: string
          created_at?: string
          id?: string
          listener_joined_at?: string | null
          session_ended_at?: string | null
          session_started_at?: string | null
          status?: string
        }
        Update: {
          booking_id?: string
          created_at?: string
          id?: string
          listener_joined_at?: string | null
          session_ended_at?: string | null
          session_started_at?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_sessions_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_messages: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
        }
        Relationships: []
      }
      listener_applications: {
        Row: {
          age: number | null
          availability: string | null
          city: string | null
          created_at: string
          email: string
          experience: string | null
          full_name: string
          id: string
          motivation: string | null
          phone: string
          status: string
        }
        Insert: {
          age?: number | null
          availability?: string | null
          city?: string | null
          created_at?: string
          email: string
          experience?: string | null
          full_name: string
          id?: string
          motivation?: string | null
          phone: string
          status?: string
        }
        Update: {
          age?: number | null
          availability?: string | null
          city?: string | null
          created_at?: string
          email?: string
          experience?: string | null
          full_name?: string
          id?: string
          motivation?: string | null
          phone?: string
          status?: string
        }
        Relationships: []
      }
      navigator_applications: {
        Row: {
          availability: string | null
          created_at: string
          email: string
          full_name: string
          id: string
          medical_school: string | null
          motivation: string | null
          phone: string
          status: string
          year_of_study: string | null
        }
        Insert: {
          availability?: string | null
          created_at?: string
          email: string
          full_name: string
          id?: string
          medical_school?: string | null
          motivation?: string | null
          phone: string
          status?: string
          year_of_study?: string | null
        }
        Update: {
          availability?: string | null
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          medical_school?: string | null
          motivation?: string | null
          phone?: string
          status?: string
          year_of_study?: string | null
        }
        Relationships: []
      }
      partnership_inquiries: {
        Row: {
          contact_name: string
          created_at: string
          email: string
          id: string
          message: string | null
          organization: string
          phone: string | null
        }
        Insert: {
          contact_name: string
          created_at?: string
          email: string
          id?: string
          message?: string | null
          organization: string
          phone?: string | null
        }
        Update: {
          contact_name?: string
          created_at?: string
          email?: string
          id?: string
          message?: string | null
          organization?: string
          phone?: string | null
        }
        Relationships: []
      }
      stats: {
        Row: {
          id: number
          listeners_active: number
          people_heard: number
          sessions_held: number
          updated_at: string
        }
        Insert: {
          id?: number
          listeners_active?: number
          people_heard?: number
          sessions_held?: number
          updated_at?: string
        }
        Update: {
          id?: number
          listeners_active?: number
          people_heard?: number
          sessions_held?: number
          updated_at?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "listener" | "navigator"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "listener", "navigator"],
    },
  },
} as const
