"use client";

import { LayoutGrid, List } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ViewToggleProps {
    viewMode: 'grid' | 'list';
    setViewMode: (mode: 'grid' | 'list') => void;
    className?: string; // Allow custom styling/positioning
}

export function ViewToggle({ viewMode, setViewMode, className }: ViewToggleProps) {
  return (
    <div className={className}>
        <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as 'grid' | 'list')} className="w-auto">
            <TabsList>
                <TabsTrigger value="grid" className="px-4 py-2">
                    <LayoutGrid className="w-4 h-4 mr-2" /> Grid
                </TabsTrigger>
                <TabsTrigger value="list" className="px-4 py-2">
                    <List className="w-4 h-4 mr-2" /> List
                </TabsTrigger>
            </TabsList>
        </Tabs>
    </div>
  );
}
