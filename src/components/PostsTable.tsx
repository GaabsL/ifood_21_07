import { Post } from '../types';

interface PostsTableProps {
  posts: Post[];
}

export function PostsTable({ posts }: PostsTableProps) {
  const hasGrupo = posts.some(p => p.grupo);
  const hasSubgrupo = posts.some(p => p.subgrupo);
  const hasFormato = posts.some(p => p.formato);
  const hasCurtidas = posts.some(p => p.curtidas);
  const hasComentarios = posts.some(p => p.comentarios);
  const hasEnvios = posts.some(p => p.envios);
  const hasSalvos = posts.some(p => p.salvos);
  const hasRespostas = posts.some(p => p.respostas);
  const hasCliquesLink = posts.some(p => p.cliquesLink);
  const hasVisualizacoes = posts.some(p => p.visualizacoes);
  const hasCompartilhamentos = posts.some(p => p.compartilhamentos);
  const hasAlcance = posts.some(p => p.alcance);
  const hasImpressoes = posts.some(p => p.impressoes);
  const hasLink = posts.some(p => p.link);
  const hasStatus = posts.some(p => p.status);
  const hasImageOrTitle = posts.some(p => p.imageUrl || p.title);

  return (
    <div className="bg-white border border-slate-200 shadow-sm rounded-xl mt-8 overflow-hidden overflow-x-auto">
      <table className="w-full text-left border-collapse whitespace-nowrap min-w-max">
        <thead>
          <tr className="bg-slate-50 border-b border-slate-100 text-slate-400 text-[11px] font-bold uppercase tracking-wider">
            <th className="px-6 py-4">Data</th>
            {hasImageOrTitle && <th className="px-6 py-4">Post</th>}
            {hasGrupo && <th className="px-6 py-4">Grupo</th>}
            {hasSubgrupo && <th className="px-6 py-4">Subgrupo</th>}
            {hasFormato && <th className="px-6 py-4">Formato</th>}
            {hasAlcance && <th className="px-6 py-4 text-right">Alcance</th>}
            {hasVisualizacoes && <th className="px-6 py-4 text-right">Visualizações</th>}
            <th className="px-6 py-4 text-right">Interações</th>
            {hasCurtidas && <th className="px-6 py-4 text-right">Curtidas</th>}
            {hasComentarios && <th className="px-6 py-4 text-right">Coments.</th>}
            {hasRespostas && <th className="px-6 py-4 text-right">Respostas</th>}
            {hasCompartilhamentos && <th className="px-6 py-4 text-right">Compart.</th>}
            {hasEnvios && <th className="px-6 py-4 text-right">Envios</th>}
            {hasSalvos && <th className="px-6 py-4 text-right">Salvos</th>}
            {hasCliquesLink && <th className="px-6 py-4 text-right">C. Link</th>}
            {hasImpressoes && <th className="px-6 py-4 text-right">Impressões</th>}
            {hasLink && <th className="px-6 py-4 text-center">Link</th>}
            {hasStatus && <th className="px-6 py-4">Status</th>}
            <th className="px-6 py-4 text-right text-ifood">Engajamento</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-sm">
          {posts.map((post) => (
            <tr key={post.id} className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 text-slate-500">{post.date}</td>
              {hasImageOrTitle && (
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    {post.imageUrl && (
                      <img 
                        src={post.imageUrl} 
                        alt="" 
                        className="w-12 h-12 rounded-lg object-cover bg-slate-100 border border-slate-200"
                      />
                    )}
                    {post.title && (
                      <span className="font-semibold text-slate-800 line-clamp-2 max-w-[250px] whitespace-normal">{post.title}</span>
                    )}
                  </div>
                </td>
              )}
              {hasGrupo && (
                <td className="px-6 py-4 font-medium text-slate-700">{post.grupo || '-'}</td>
              )}
              {hasSubgrupo && (
                <td className="px-6 py-4 text-slate-600">{post.subgrupo || '-'}</td>
              )}
              {hasFormato && (
                <td className="px-6 py-4">
                  {post.formato ? (
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-600 font-medium text-[11px] rounded uppercase tracking-wider">
                      {post.formato}
                    </span>
                  ) : '-'}
                </td>
              )}
              {hasAlcance && (
                <td className="px-6 py-4 text-right text-slate-700 font-medium">{post.alcance || '-'}</td>
              )}
              {hasVisualizacoes && (
                <td className="px-6 py-4 text-right text-slate-700 font-medium">{post.visualizacoes || '-'}</td>
              )}
              <td className="px-6 py-4 text-right text-slate-700 font-medium">{post.interacoes}</td>
              {hasCurtidas && (
                <td className="px-6 py-4 text-right text-slate-600">{post.curtidas || '-'}</td>
              )}
              {hasComentarios && (
                <td className="px-6 py-4 text-right text-slate-600">{post.comentarios || '-'}</td>
              )}
              {hasRespostas && (
                <td className="px-6 py-4 text-right text-slate-600">{post.respostas || '-'}</td>
              )}
              {hasCompartilhamentos && (
                <td className="px-6 py-4 text-right text-slate-600">{post.compartilhamentos || '-'}</td>
              )}
              {hasEnvios && (
                <td className="px-6 py-4 text-right text-slate-600">{post.envios || '-'}</td>
              )}
              {hasSalvos && (
                <td className="px-6 py-4 text-right text-slate-600">{post.salvos || '-'}</td>
              )}
              {hasCliquesLink && (
                <td className="px-6 py-4 text-right text-slate-600">{post.cliquesLink || '-'}</td>
              )}
              {hasImpressoes && (
                <td className="px-6 py-4 text-right text-slate-700 font-medium">{post.impressoes || '-'}</td>
              )}
              {hasLink && (
                <td className="px-6 py-4 text-center">
                  {post.link ? (
                    <span className="text-blue-500 hover:underline cursor-pointer">{post.link}</span>
                  ) : '-'}
                </td>
              )}
              {hasStatus && (
                <td className="px-6 py-4">
                  {post.status ? (
                    <span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 font-medium text-[11px] rounded uppercase tracking-wider">
                      {post.status}
                    </span>
                  ) : '-'}
                </td>
              )}
              <td className="px-6 py-4 text-right font-bold text-emerald-600">{post.engajamento}</td>
            </tr>
          ))}
          {posts.length === 0 && (
            <tr>
              <td colSpan={13} className="px-6 py-12 text-center text-slate-500">
                Nenhum post encontrado para este período.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
