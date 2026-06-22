import React, { useState } from 'react';
import { Trash2, Plus, X } from 'lucide-react';

// MAKE SURE THIS EXACT LINE SAYS: export default function AdminDashboard
export default function AdminDashboard({ transformations, setTransformations, testimonials, setTestimonials, onClose }) {
  const [newTrans, setNewTrans] = useState({
    name: '', category: 'Fat Loss', duration: '', weightBefore: '', weightAfter: '', result: '', beforeImage: '', afterImage: '', programType: ''
  });

  const handleAddTransformation = (e) => {
    e.preventDefault();
    const item = { ...newTrans, id: Date.now() };
    setTransformations([item, ...transformations]);
    setNewTrans({ name: '', category: 'Fat Loss', duration: '', weightBefore: '', weightAfter: '', result: '', beforeImage: '', afterImage: '', programType: '' });
  };

  const handleDeleteTransformation = (id) => {
    setTransformations(transformations.filter(t => t.id !== id));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end">
      <div className="w-full max-w-2xl bg-obsidian-800 h-full overflow-y-auto p-6 md:p-8 border-l border-zinc-800 shadow-2xl">
        <div className="flex justify-between items-center mb-8 border-b border-zinc-800 pb-4">
          <div>
            <h2 className="text-xl font-black uppercase tracking-wider text-white">Coach Workspace Control</h2>
            <p className="text-xs text-zinc-500 mt-0.5">Manage live portfolio components instantaneously</p>
          </div>
          <button onClick={onClose} className="p-2 text-zinc-400 hover:text-white border border-zinc-800 rounded">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Add Transformation Card Module Section Form */}
        <div className="mb-12 bg-obsidian-900 border border-zinc-900 p-6 rounded">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gold-500 mb-4 flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add New Case Profile
          </h3>
          <form onSubmit={handleAddTransformation} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input required placeholder="Client Name" className="bg-obsidian-800 text-sm p-3 border border-zinc-800 rounded text-white focus:outline-none" value={newTrans.name} onChange={e => setNewTrans({...newTrans, name: e.target.value})} />
              <select className="bg-obsidian-800 text-sm p-3 border border-zinc-800 rounded text-white focus:outline-none" value={newTrans.category} onChange={e => setNewTrans({...newTrans, category: e.target.value})}>
                <option>Fat Loss</option>
                <option>Muscle Building</option>
                <option>Body Recomposition</option>
              </select>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <input required placeholder="Duration (e.g., 3 Months)" className="bg-obsidian-800 text-xs p-3 border border-zinc-800 rounded text-white focus:outline-none" value={newTrans.duration} onChange={e => setNewTrans({...newTrans, duration: e.target.value})} />
              <input required placeholder="Before Wt." className="bg-obsidian-800 text-xs p-3 border border-zinc-800 rounded text-white focus:outline-none" value={newTrans.weightBefore} onChange={e => setNewTrans({...newTrans, weightBefore: e.target.value})} />
              <input required placeholder="After Wt." className="bg-obsidian-800 text-xs p-3 border border-zinc-800 rounded text-white focus:outline-none" value={newTrans.weightAfter} onChange={e => setNewTrans({...newTrans, weightAfter: e.target.value})} />
            </div>
            <input required placeholder="Program Type Name Title" className="w-full bg-obsidian-800 text-sm p-3 border border-zinc-800 rounded text-white focus:outline-none" value={newTrans.programType} onChange={e => setNewTrans({...newTrans, programType: e.target.value})} />
            <input required placeholder="Net Result Summary (e.g., Lost 12 kg)" className="w-full bg-obsidian-800 text-sm p-3 border border-zinc-800 rounded text-white focus:outline-none" value={newTrans.result} onChange={e => setNewTrans({...newTrans, result: e.target.value})} />
            
            <div className="bg-zinc-900/60 p-3 border border-dashed border-zinc-800 rounded space-y-2">
              <div className="text-[10px] uppercase text-zinc-500 font-bold tracking-wider">Image Cloud Resource Mappings</div>
              <input required placeholder="Before Image URL (Unsplash / Imgur link)" className="w-full bg-obsidian-800 text-xs p-2.5 border border-zinc-800 rounded text-white focus:outline-none" value={newTrans.beforeImage} onChange={e => setNewTrans({...newTrans, beforeImage: e.target.value})} />
              <input required placeholder="After Image URL (Unsplash / Imgur link)" className="w-full bg-obsidian-800 text-xs p-2.5 border border-zinc-800 rounded text-white focus:outline-none" value={newTrans.afterImage} onChange={e => setNewTrans({...newTrans, afterImage: e.target.value})} />
            </div>

            <button type="submit" className="w-full bg-white text-black text-xs font-bold uppercase tracking-widest py-3 hover:bg-gold-500 transition-colors">
              Deploy Profile Story Live
            </button>
          </form>
        </div>

        {/* Existing Transformation Management Listing Entries */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Active Transformations Inventory ({transformations.length})</h3>
          <div className="space-y-2">
            {transformations.map(t => (
              <div key={t.id} className="bg-obsidian-900 border border-zinc-900 p-4 rounded flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img src={t.afterImage} alt="" className="w-10 h-10 object-cover rounded border border-zinc-800" />
                  <div>
                    <div className="text-sm font-bold text-white">{t.name}</div>
                    <div className="text-xs text-gold-500">{t.category} — {t.duration}</div>
                  </div>
                </div>
                <button onClick={() => handleDeleteTransformation(t.id)} className="text-zinc-600 hover:text-red-500 p-2 border border-zinc-800 hover:border-red-500/20 rounded transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}